import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '../auth/auth.module';
import { Product } from '../products/models/products.model';
import { Category } from './models/categories.model';

@Module({
  imports: [SequelizeModule.forFeature([Category, Product]), AuthModule],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoryModule {}
