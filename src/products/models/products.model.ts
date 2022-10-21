import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../categories/models/categories.model';
import { ProductCreationAttributes } from '../interfaces/product-create.interface';
import { OrderItems } from 'src/orders/models/order-items.model';
import { Order } from 'src/orders/models/order.model';
import { Cart } from 'src/cart/models/cart.model';

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

  @BelongsTo(() => Category)
  category: Category;

  @BelongsToMany(() => Order, () => OrderItems)
  orders: Order[];

  @HasMany(() => Cart)
  carts: Cart[];
}
