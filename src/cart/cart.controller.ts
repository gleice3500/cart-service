import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CartService } from './cart.service';
import { AddItemDto } from './dto/add-item.dto';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Post('add')
  addItemToCart(@Request() req, @Body() addItemDto: AddItemDto): any {
    const userId = req.user.userId;
    if (!userId) {
      // Este bug só será acionado se o bug da Equipe A estiver ativo
      console.error("ERRO: userId não encontrado no token!");
    }
    return this.cartService.addItem(userId, addItemDto.productId, addItemDto.quantity);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getUserCart(@Request() req): any {
    const userId = req.user.userId;
    return this.cartService.getCart(userId);
  }
}
