export class ProductItem {
    // 'productItemKey': 'productItemKey0'
    // , 'productItemName': '焦糖馬卡龍'
    // , 'productItemPrice': '450'
    // , 'productItemImage': 'amy-shamblen-784211-unsplash.jpg'
    // , 'productItemType': 'BenRiJingXuan'

    private productItemKey = ''; //商品序號
    private productItemName = ''; //商品名稱
    private productItemPrice = 0; //商品價格
    private productItemImage = ''; //商品圖名稱
    private productItemType = ''; //商品種類

    constructor(productItemKey: string, productItemName: string, productItemPrice: number, productItemImage: string, productItemType: string) {
        this.productItemKey = productItemKey || ''; //避免傳入的值為 Falsy 值
        this.productItemName = productItemName || ''; //避免傳入的值為 Falsy 值
        this.productItemPrice = productItemPrice || 0; //避免傳入的值為 Falsy 值
        this.productItemImage = productItemImage || ''; //避免傳入的值為 Falsy 值
        this.productItemType = productItemType || ''; //避免傳入的值為 Falsy 值
    }

    get key(): string {
        return this.productItemKey;
    }

    get name(): string {
        return this.productItemName;
    }
    
    get price(): number {
        return this.productItemPrice;
    }

    get image(): string {
        return this.productItemImage;
    }

    get type(): string {
        return this.productItemType;
    }

}
