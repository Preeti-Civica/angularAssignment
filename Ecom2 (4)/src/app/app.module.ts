import { ProductDescComponent } from "./store/ProductDesc.Component";
import { CouponComponent } from "./store/discount.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
    declarations: [AppComponent],

    imports: [
        BrowserModule,
        StoreModule,
        RouterModule.forRoot([
            {
                path: "coupon",
                component: CouponComponent,
                canActivate: [StoreFirstGuard],
            },
            {
                path: "store",
                component: StoreComponent,
                canActivate: [StoreFirstGuard],
            },
            {
                path: "cart",
                component: CartDetailComponent,
                canActivate: [StoreFirstGuard],
            },
            {
                path: "checkout",
                component: CheckoutComponent,
                canActivate: [StoreFirstGuard],
            },
            { path: 'productDescription/:id', component: ProductDescComponent },
            { path: "coupon", component: CouponComponent },
            { path: "**", redirectTo: "/coupon" },
        ]),
    ],

    providers: [StoreFirstGuard],

    bootstrap: [AppComponent],
})
export class AppModule { }
