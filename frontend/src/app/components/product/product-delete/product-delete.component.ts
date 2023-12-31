import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product-model';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {

  product: Product

  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.productService.readById(id).subscribe(product => {
        this.product = product
      })
    }

    deleteProduct(): void {
     this.productService.delete(this.product.id).subscribe(() => 
     this.productService.showMessage('Excluído com sucesso!'))
     this.router.navigate(['/products'])
    }

    cancel(): void {
      this.router.navigate(['/products'])
    }
}
