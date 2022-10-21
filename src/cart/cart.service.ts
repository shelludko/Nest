import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductService } from 'src/products/products.service';
import { CartDto } from './dto/cart.dto';
import { Cart } from './models/cart.model';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart) private cartRepository: typeof Cart,
    private productService: ProductService,
  ) {}

  async addItemToCart(dto: CartDto) {
    const product = await this.productService.findProduct(dto.productId);
    return await this.cartRepository.create({
      name: product.name,
      description: product.description,
      quantity: dto.quantity,
      totalPrice: dto.quantity * product.price,
      productId: dto.productId,
      image: product.image,
    });
  }
}
