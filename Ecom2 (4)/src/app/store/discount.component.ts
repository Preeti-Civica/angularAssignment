import { Router } from '@angular/router';
import { DiscountRepository } from './../model/discount.repositroy';
import { Component } from "@angular/core";

@Component({
  templateUrl: "./discount.component.html",
  styleUrls: ["discount.component.css"]
})
export class CouponComponent {
  constructor(private discount : DiscountRepository , private route : Router) {}

  addDiscount() {
    this.discount.setDiscount(10);

    this.route.navigateByUrl("/store");
  }

  skipDiscount() {
    this.route.navigateByUrl("/store");
  }
}
