import { ApiProperty } from '@nestjs/swagger';
import {
  Model,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/models/users.model';
import { IOrder } from '../interfaces/order.interface';

@Table({ tableName: 'orders' })
export class Order extends Model<Order, IOrder> {
  @ApiProperty({ example: 1, description: 'Order ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'User ID' })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @ApiProperty({ example: 1, description: 'Total price' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalPrice: number;

  @ApiProperty({
    example: '2022-10-21 09:53:43.787+03',
    description: 'Date of create',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 1,
  })
  createdDate: string;

  @ApiProperty({ example: false, description: 'Is paid' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isPaid: boolean;

  @BelongsTo(() => User)
  user: User;
}
