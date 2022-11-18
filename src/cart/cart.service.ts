import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';
import { CartDto } from './dto/cart.dto';
import { Cart } from './models/cart.model';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart) private cartRepository: typeof Cart,
    private productService: ProductService,
    private userService: UsersService,
  ) {}

  async addItem(dto: CartDto) {
    const product = await this.productService.findProduct(dto.productId);
//    const user = await this.userService.getUserById(id);
    return await this.cartRepository.create({
      name: product.name,
      description: product.description,
      totalPrice: product.price,
      productId: dto.productId,
//      userId: user.id,
      image: product.image,
    });
  }

  async itemsCount() {
    return await Cart.sum('totalPrice');
  }

  async clearCart() {
    return await Cart.truncate();
  }

  async findItem(id: number): Promise<Cart> {
    return this.cartRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findAllItems(): Promise<Cart[]> {
    return this.cartRepository.findAll();
  }

  async deleteProduct(id: number): Promise<void> {
    const item = await this.findItem(id);
    await item.destroy();
  }
}
