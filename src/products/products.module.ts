import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './models/products.model';
import { AuthModule } from '../auth/auth.module';
import { Category } from '../categories/models/categories.model';
import { FilesModule } from 'src/files/files.module';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Product, Category]),
    AuthModule,
    FilesModule,
  ],
  providers: [ProductService, CategoriesService],
  controllers: [ProductController],
  exports: [SequelizeModule],
})
export class ProductModule {}
