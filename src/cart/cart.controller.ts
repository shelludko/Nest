import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles, RolesList } from 'src/auth/decorators/role-auth.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CartService } from './cart.service';
import { CartDto } from './dto/cart.dto';
import { Cart } from './models/cart.model';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: 'Add item to cart' })
  @ApiResponse({ status: 201, type: Cart })
  @Roles(RolesList.CUSTOMER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Post('add-item')
  @HttpCode(201)
  async addItemToCart(@Body() dto: CartDto) {
    return await this.cartService.addItemToCart(dto);
  }
}
