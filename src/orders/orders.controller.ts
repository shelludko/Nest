import {
  Controller,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles, RolesList } from 'src/auth/decorators/role-auth.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Order } from './models/order.model';
import { ORDER_NOT_FOUND_ERROR } from './order.constants';
import { OrdersService } from './orders.service';

@Controller('order')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({ status: 201, type: Order })
  @Roles(RolesList.CUSTOMER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Post('create')
  @HttpCode(201)
  async createOrder(@Req() req: any) {
    return this.orderService.createOrder(req.user.id);
  }

  @ApiOperation({ summary: 'Pay order' })
  @ApiResponse({ status: 200, type: Order })
  @Roles(RolesList.CUSTOMER)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Patch('pay/:id')
  @HttpCode(200)
  async payByOrder(@Param('id') id: number) {
    const order = await this.orderService.findOrder(id);
    if (!order) {
      throw new NotFoundException(ORDER_NOT_FOUND_ERROR);
    }
    await this.orderService.payByOrder(order.id);
    return `Order with ID ${order.id} payed successfully`;
  }
}
