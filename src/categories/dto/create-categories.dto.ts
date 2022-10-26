import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  id: number;

  @ApiProperty({ example: 'Smartphones', description: 'Category name' })
  @IsString({ message: 'Name should be string' })
  @IsNotEmpty({ message: 'Name required' })
  @MaxLength(100, { message: 'Name is too long' })
  readonly name: string;

  @ApiProperty({
    example: 'Smartphones category',
    description: 'Category description',
  })
  @IsString({ message: 'Description should be string' })
  @IsNotEmpty({ message: 'Description required' })
  @MaxLength(500, { message: 'Description is too long' })
  readonly description: string;
}
