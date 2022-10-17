import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../categories/models/categories.model';
import { User } from '../../users/models/users.model';

interface ProductCreationAttributes {
  name: string;
  description: string;
  price: number;
  categoryId: number;
  userId: number;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttributes> {
  @ApiProperty({ example: 1, description: 'Uniq id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Xiaomi Redmi 10', description: 'Product name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  name: string;

  @ApiProperty({
    example: 'Good smartphone',
    description: 'Product description',
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  description: string;

  @ApiProperty({ example: '11000', description: 'Product price' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  price: number;

  @ApiProperty({ example: 'image.png', description: 'Product image' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @ApiProperty({ example: 1, description: 'Category ID' })
  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  categoryId: number;

  @ApiProperty({ example: 1, description: 'User ID' })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  userId: number;

  @BelongsTo(() => Category)
  category: Category;

  @BelongsTo(() => User)
  user: User;
}
