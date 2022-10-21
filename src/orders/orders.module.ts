import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './models/order.model';
import { User } from 'src/users/models/users.model';
import { Cart } from 'src/cart/models/cart.model';
import { CartService } from 'src/cart/cart.service';
import { ProductService } from 'src/products/products.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { CartModule } from 'src/cart/cart.module';
import { Product } from 'src/products/models/products.model';
import { FilesService } from 'src/files/files.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Order, Cart, User, Product]),
    AuthModule,
    UsersModule,
    CartModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, CartService, ProductService, FilesService],
})
export class OrdersModule {}
