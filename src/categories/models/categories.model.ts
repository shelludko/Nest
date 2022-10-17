import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/products/models/products.model';

interface CategoryCreationAttributes {
  name: string;
  description: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoryCreationAttributes> {
  @ApiProperty({ example: 1, description: 'Uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Smartphones', description: 'Category name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  name: string;

  @ApiProperty({
    example: 'Smartphones category',
    description: 'Category description',
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  description: string;

  @HasMany(() => Product)
  products: Product[];
}
