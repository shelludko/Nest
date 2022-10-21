import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { Product } from 'src/products/models/products.model';
import { ProductService } from 'src/products/products.service';
import { FilesService } from 'src/files/files.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/models/users.model';
import { RolesService } from 'src/roles/roles.service';
import { Role } from 'src/roles/models/roles.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Cart, Product, User, Role]),
    AuthModule,
  ],
  controllers: [CartController],
  providers: [
    CartService,
    ProductService,
    FilesService,
    UsersService,
    RolesService,
  ],
})
export class CartModule {}
