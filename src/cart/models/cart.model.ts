import { ApiProperty } from '@nestjs/swagger';
import {
  Model,
  Column,
  DataType,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from 'src/products/models/products.model';
import { User } from 'src/users/models/users.model';
import { ICart } from '../interfaces/cart.interface';

@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, ICart> {
  @ApiProperty({ example: 1, description: 'Cart ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Xiaomi', description: 'Item name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'Smartphone', description: 'Item description' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({ example: 1, description: 'Quantity' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  quantity: number;

  @ApiProperty({ example: 1, description: 'Total price' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalPrice: number;

  @ApiProperty({ example: 1, description: 'Product ID' })
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId: number;

  @ApiProperty({ example: 1, description: 'User ID' })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @ApiProperty({
    example: '63e74470-735f-4568-8663-37b677bfcac0.jpg',
    description: 'Product image',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @BelongsTo(() => Product)
  product: Product;

  @BelongsTo(() => User)
  user: User;
}
