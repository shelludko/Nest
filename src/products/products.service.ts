import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/products.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productRepository: typeof Product,
  ) {}

  async createProduct(dto: CreateProductDto) {
    return await this.productRepository.create(dto);
  }

  async updateProduct(id: number, dto: UpdateProductDto) {
    return await this.productRepository.update(dto, {
      where: {
        id,
      },
    });
  }

  async findProduct(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findAllProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async deleteProduct(id: number): Promise<void> {
    const product = await this.findProduct(id);
    await product.destroy();
  }
}
