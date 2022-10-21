import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CartService } from 'src/cart/cart.service';
import { Cart } from 'src/cart/models/cart.model';
import { UsersService } from 'src/users/users.service';
import { Order } from './models/order.model';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order,
    @InjectModel(Cart) private cartRepository: typeof Cart,
    private userService: UsersService,
    private cartService: CartService,
  ) {}

  async createOrder(userId: number): Promise<Order> {
    const user = await this.userService.getUserById(userId);
    const countPrice = await this.cartService.itemsCount();
    const order = await this.orderRepository.create({
      userId: user.id,
      totalPrice: countPrice,
      createdDate: new Date().toLocaleDateString(),
    });
    return order;
  }

  async findOrder(id: number): Promise<Order> {
    return this.orderRepository.findOne({
      where: {
        id,
      },
    });
  }

  async payByOrder(id: number) {
    await this.cartService.clearCart();
    return await this.orderRepository.update(
      {
        isPaid: true,
      },
      {
        where: { id },
      },
    );
  }
}
