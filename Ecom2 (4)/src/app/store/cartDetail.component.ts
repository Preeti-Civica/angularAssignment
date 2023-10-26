import { DiscountRepository } from "./../model/discount.repositroy";
import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    templateUrl: "cartDetail.component.html",
})
export class CartDetailComponent {
    public discountPercent: number = 0;
    public discountRemaining: boolean = false;

    constructor(public cart: Cart, public coupon: DiscountRepository) {
        this.discountPercent = this.coupon.getDiscount();

        if (this.discountPercent == 0) {
            this.discountRemaining = true;
        }
    }

    currentDiscount = {
        discountedPrice: 0,

        discountpercentage: 0,
    };

    applyDiscount(discount: number) {
        this.cart.applyCoupon(discount);
    }
}
