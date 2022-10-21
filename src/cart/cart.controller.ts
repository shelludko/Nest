import {
  Body,
  Controller,
  Delete,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles, RolesList } from 'src/auth/decorators/role-auth.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { PRODUCT_NOT_FOUND_ERROR } from 'src/products/products.constants';
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
  async addItemToCart(@Body() dto: CartDto, @Req() req: any) {
    return await this.cartService.addItem(dto, req.user.id);
  }

  @ApiOperation({ summary: 'Delete item from cart' })
  @ApiResponse({ status: 200, type: Cart })
  @Roles(RolesList.CUSTOMER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Delete(':id')
  @HttpCode(200)
  async deleteItemFromCart(@Param('id') id: number) {
    const item = await this.cartService.findItem(id);
    if (!item) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    await this.cartService.deleteProduct(item.id);
    return `Product with ID ${item.id} deleted successfully`;
  }
}
