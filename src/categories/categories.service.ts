import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-categories.dto';
import { UpdateCategoryDto } from './dto/update-categories.dto';
import { Category } from './models/categories.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private readonly categoryRepository: typeof Category,
  ) {}

  async createCategory(dto: CreateCategoryDto) {
    return await this.categoryRepository.create(dto);
  }

  async updateCategory(id: number, dto: UpdateCategoryDto) {
    return await this.categoryRepository.update(dto, {
      where: {
        id,
      },
    });
  }

  async findCategory(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findAllCategories(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }

  async deleteCategory(id: number): Promise<void> {
    const category = await this.findCategory(id);
    await category.destroy();
  }
}
