import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles, RolesList } from 'src/auth/decorators/role-auth.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Product } from 'src/products/models/products.model';
import { CATEGORY_NOT_FOUND_ERROR } from './categories.constants';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-categories.dto';
import { UpdateCategoryDto } from './dto/update-categories.dto';
import { Category } from './models/categories.model';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: Category })
  @Roles(RolesList.SELLER, RolesList.CUSTOMER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async findAllProducts() {
    return await this.categoriesService.findAllCategories();
  }

  @ApiOperation({ summary: 'Get category' })
  @ApiResponse({ status: 200, type: Product })
  @Roles(RolesList.SELLER, RolesList.CUSTOMER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Get(':id')
  @HttpCode(200)
  async findProduct(@Param('id') id: number) {
    const category = await this.categoriesService.findCategory(id);
    if (!category) {
      throw new NotFoundException(CATEGORY_NOT_FOUND_ERROR);
    }
    return await this.categoriesService.findCategory(category.id);
  }

  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 201, type: Category })
  @Roles(RolesList.SELLER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Post('create')
  @HttpCode(201)
  async createProduct(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.createCategory(dto);
  }

  @ApiOperation({ summary: 'Update category' })
  @ApiResponse({ status: 200, type: Category })
  @Roles(RolesList.SELLER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Patch(':id')
  @HttpCode(200)
  async updateProduct(
    @Param('id') id: number,
    @Body() dto: UpdateCategoryDto,
    @Req() req,
  ) {
    const category = await this.categoriesService.findCategory(id);
    if (!category) {
      throw new NotFoundException(CATEGORY_NOT_FOUND_ERROR);
    }
    await this.categoriesService.updateCategory(category.id, dto);
    return req.body;
  }

  @ApiOperation({ summary: 'Delete category' })
  @ApiResponse({ status: 200, type: Category })
  @Roles(RolesList.SELLER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Delete(':id')
  @HttpCode(200)
  async deleteProduct(@Param('id') id: number) {
    const category = await this.categoriesService.findCategory(id);
    if (!category) {
      throw new NotFoundException(CATEGORY_NOT_FOUND_ERROR);
    }
    await this.categoriesService.deleteCategory(category.id);
    return `Category with ID ${category.id} deleted successfully`;
  }
}
