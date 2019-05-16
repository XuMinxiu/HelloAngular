import { Component, OnInit } from '@angular/core';
import { ProductListType } from './product-list-type.enum';
import { productItemList } from '../../shared/product-item/product-item-list.const';
import { ProductItem } from '../../shared/product-item/product-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productListType = ProductListType;
  private status  = ProductListType.ALL;
  productItem: ProductItem = new ProductItem("productItemKey26", "焦糖馬卡龍26", 399, "whitney-wright-356670-unsplash.jpg", "XinPinShangShi");

  constructor() { }

  ngOnInit() {
  }

  setStatus(status: number) {
    this.status = status;
  }

  getStatus(status: number): boolean {
    return this.status === status;
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

  getProductList(): ProductItem[] {
    let productList :ProductItem[] = [];

    for(let i=0;i<productItemList.length;i++) {
      let tempItem = productItemList[i];
      productList.push(new ProductItem(tempItem.productItemKey, tempItem.productItemName, Number.parseInt(tempItem.productItemPrice), tempItem.productItemImage, tempItem.productItemType));
    }

    return productList;
  }

}
