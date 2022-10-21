import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { Product } from 'src/products/models/products.model';
import { ProductService } from 'src/products/products.service';
import { FilesService } from 'src/files/files.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [SequelizeModule.forFeature([Cart, Product]), AuthModule],
  controllers: [CartController],
  providers: [CartService, ProductService, FilesService],
})
export class CartModule {}
