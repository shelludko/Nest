import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CategoriesService } from 'src/categories/categories.service';
import { FilesService } from 'src/files/files.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/products.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productRepository: typeof Product,
    private readonly fileService: FilesService,
    private readonly categoryService: CategoriesService,
  ) {}

  async createProduct(dto: CreateProductDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    return await this.productRepository.create({ ...dto, image: fileName });
  }

  async updateProduct(id: number, dto: UpdateProductDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    return await this.productRepository.update(
      { ...dto, image: fileName },
      {
        where: {
          id,
        },
      },
    );
  }

  async findProduct(id: number): Promise<Product> {
    return await this.productRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findProductsByCategory(id: number): Promise<Product[]> {
    const category = await this.categoryService.findCategory(id);
    if (!category) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }
    return await this.productRepository.findAll({
      where: {
        categoryId: category.id,
      },
      order: [['id', 'DESC']],
    });
  }

  async findAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAll({
      order: [['id', 'DESC']],
    });
  }

  async deleteProduct(id: number): Promise<void> {
    const product = await this.findProduct(id);
    await product.destroy();
  }
}
