import { Injectable } from '@nestjs/common';
interface CartItem {
productId: string;
quantity: number;
}
@Injectable()
export class CartService {
private readonly carts = new Map<string, CartItem[]>();
addItem(userId: string, productId: string, quantity: number) {
let userCart = this.carts.get(userId);
if (!userCart) userCart = [];
const itemIndex = userCart.findIndex(item => item.productId
=== productId);
if (itemIndex > -1) {
userCart[itemIndex].quantity += quantity;
} else {
userCart.push({ productId, quantity });
}
this.carts.set(userId, userCart);
console.log('Carts:', this.carts); // Para depuração
return userCart;
}
getCart(userId: string) {
return this.carts.get(userId) || [];
}
}