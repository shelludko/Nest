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
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PRODUCT_NOT_FOUND_ERROR } from './products.constants';
import { Product } from './models/products.model';
import { Roles, RolesList } from '../auth/decorators/role-auth.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, type: Product })
  // @Roles(RolesList.ADMIN, RolesList.SELLER, RolesList.CUSTOMER)
  // @UseGuards(RolesGuard, JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async findAllProducts() {
    return await this.productService.findAllProducts();
  }
    
  @ApiOperation({ summary: 'Get all products by category' })
  @ApiResponse({ status: 200, type: Product })
  // @Roles(RolesList.ADMIN, RolesList.SELLER, RolesList.CUSTOMER)
  // @UseGuards(RolesGuard, JwtAuthGuard)
  @Get('category/:id')
  @HttpCode(200)
  async findProductsByCategory(@Param('id') id: number) {
    return await this.productService.findProductsByCategory(id);
  }

  @ApiOperation({ summary: 'Get product' })
  @ApiResponse({ status: 200, type: Product })
  @Roles(RolesList.ADMIN, RolesList.SELLER, RolesList.CUSTOMER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Get(':id')
  @HttpCode(200)
  async findProduct(@Param('id') id: number) {
    const product = await this.productService.findProduct(id);
    if (!product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    return await this.productService.findProduct(product.id);
  }

  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 201, type: Product })
  @Roles(RolesList.SELLER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Post('create')
  @UseInterceptors(FileInterceptor('image'))
  @HttpCode(201)
  async createProduct(
    @Body() dto: CreateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return await this.productService.createProduct(dto, image);
  }

  @ApiOperation({ summary: 'Update product' })
  @ApiResponse({ status: 200, type: Product })
  @Roles(RolesList.SELLER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Patch(':id')
  @HttpCode(200)
  async updateProduct(
    @Param('id') id: number,
    @Body() dto: UpdateProductDto,
    @UploadedFile() image: Express.Multer.File,
    @Req() req,
  ) {
    const product = await this.productService.findProduct(id);
    if (!product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    await this.productService.updateProduct(product.id, dto, image);
    return req.body;
  }

  @ApiOperation({ summary: 'Delete product' })
  @ApiResponse({ status: 200, type: Product })
  @Roles(RolesList.SELLER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Delete(':id')
  @HttpCode(200)
  async deleteProduct(@Param('id') id: number) {
    const product = await this.productService.findProduct(id);
    if (!product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
    }
    await this.productService.deleteProduct(product.id);
    return `Product with ID ${product.id} deleted successfully`;
  }
}
