import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from './footer.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  product;
  constructor(
    private router: Router,
    private footer: FooterService
    ) { }

  ngOnInit(): void {
  }

  abc() {
    this.router.navigateByUrl('/product-details');
  }

  products() {
    this.footer.getProducts().subscribe(
      (data) => {
        this.product =  data.products;
        console.log(this.product);
      }
    )
  }

}
