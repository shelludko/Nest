import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './models/products.model';
import { AuthModule } from '../auth/auth.module';
import { Category } from '../categories/models/categories.model';

@Module({
  imports: [SequelizeModule.forFeature([Product, Category]), AuthModule],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [SequelizeModule],
})
export class ProductModule {}
