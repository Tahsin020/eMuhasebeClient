import { Component } from '@angular/core';
import { ProductDetailPipe } from '../../pipes/product-detail.pipe';
import { SharedModule } from '../../modules/shared.module';
import { ProductModel } from '../../models/product.model';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SharedModule,ProductDetailPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: ProductModel = new ProductModel();  
  productId: string = "";
  search:string = ""; 

  constructor(
    private http: HttpService,    
    private activated: ActivatedRoute
  ){
    this.activated.params.subscribe(res=> {
      this.productId = res["id"];

      this.getAll();      
    })
  }

  getAll(){
    this.http.post<ProductModel>("ProductDetails/GetAll",
    {productId: this.productId},(res)=> {
      this.product = res;
    });
  }  
}
