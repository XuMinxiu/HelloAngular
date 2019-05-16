import { Component, OnInit } from '@angular/core';
import { ProductItem } from './product-item.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  productItem: ProductItem = new ProductItem("productItemKey26", "焦糖馬卡龍26", 399, "whitney-wright-356670-unsplash.jpg", "XinPinShangShi");

  constructor() { }

  ngOnInit() {
  }

  getProductItem() {
    return this.productItem;
  }

  getProductItemTypeName(type: string) {
    if(type == "BenRiJingXuan") {
      return "本日精選";
    } else if(type == "RenQiTuiJian") {
      return "人氣推薦";
    } else if(type == "XinPinShangShi") {
      return "新品上市"
    }
  }

}
