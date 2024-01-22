import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/index';
import { ProductService } from '../../services/product.service';
import { ProductDetailsModalComponent } from '../../components/product-details-modal/product-details-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  displayedColumns: string[] = ['id', 'title', 'category','price','actions',];
  dataSource!: MatTableDataSource<Product>;
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  selectedLimit: number = 10;
  limits = [5,10,15,20];
  loading: boolean = false;
  constructor(private authService: AuthService, private productService: ProductService,private modalService: NgbModal, private router: Router) {
    
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getProducts(): void {
    this.loading = true;
    this.productService.getProducts(this.selectedLimit.toString()).subscribe(
      (data) => {
        this.products = data;
        this.dataSource = new MatTableDataSource(this.products);
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
      }
    )
  }

  getCategories(): void {
    this.loading = true;
    this.productService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        this.loading = false;
        
      },
      (error) => {
        console.error('errorrr', error);
        this.loading = false;
      }
    );
  }

  getProductsByCategory(): void {
    this.loading = true;
    
    if (this.selectedCategory) {
      this.productService.getProductsByCategory(this.selectedCategory, this.selectedLimit).subscribe(
        (data) => {
          this.products = data ;
          this.dataSource = new MatTableDataSource(this.products);
          this.loading = false;
          
        },
        (error) => {
          console.error('hay errooorr', error);
          this.loading = false;
        }
      );
    } else {
      this.getProducts();
      
    }
  }
  
  openModal(id:number): void {
    const modalRef = this.modalService.open(ProductDetailsModalComponent); 
    this.productService.getProductById(id).subscribe(
      (data) => {
        console.log(data)
        modalRef.componentInstance.product = data; 
      },
      (error) => {
        console.error('errorrr', error);
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);

  }
}
