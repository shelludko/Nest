import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './models/order.model';
import { User } from 'src/users/models/users.model';
import { ProductService } from 'src/products/products.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { Product } from 'src/products/models/products.model';
import { FilesService } from 'src/files/files.service';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/categories/models/categories.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Order, User, Product, Category]),
    AuthModule,
    UsersModule,
  ],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    ProductService,
    FilesService,
    CategoriesService,
  ],
})
export class OrdersModule {}
