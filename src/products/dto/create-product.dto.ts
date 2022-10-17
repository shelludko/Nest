import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Xiaomi Redmi 10', description: 'Product name' })
  @IsString({ message: 'Name should be string' })
  @IsNotEmpty({ message: 'Name required' })
  @MaxLength(100, { message: 'Name is too long' })
  readonly name: string;

  @ApiProperty({
    example: 'Good smartphone',
    description: 'Product description',
  })
  @IsString({ message: 'Description should be string' })
  @IsNotEmpty({ message: 'Description required' })
  @MaxLength(500, { message: 'Description is too long' })
  readonly description: string;

  @ApiProperty({ example: 11000, description: 'Product price' })
  @IsNumber()
  @IsNotEmpty({ message: 'Price required' })
  readonly price: number;

  @ApiProperty({ example: 1, description: 'Product category' })
  @IsNumber()
  @IsNotEmpty({ message: 'CategoryID required' })
  readonly categoryId: number;

  @ApiProperty({ example: 1, description: 'Product owner' })
  @IsNumber()
  @IsNotEmpty({ message: 'User ID required' })
  readonly userId: number;
}
