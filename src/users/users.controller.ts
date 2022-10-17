import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles, RolesList } from '../auth/decorators/role-auth.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { User } from './models/users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles(RolesList.ADMIN)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Post()
  async getAll() {
    return await this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Issue a role' })
  @ApiResponse({ status: 200 })
  @Roles(RolesList.ADMIN)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Post('/role')
  async addRole(@Body() dto: AddRoleDto) {
    return await this.userService.addRole(dto);
  }

  @ApiOperation({ summary: 'Ban user' })
  @ApiResponse({ status: 200 })
  @Roles(RolesList.ADMIN)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Post('/ban')
  async banUser(@Body() dto: BanUserDto) {
    return await this.userService.banUser(dto);
  }

  @ApiOperation({ summary: 'Unban user' })
  @ApiResponse({ status: 200 })
  @Roles(RolesList.ADMIN)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Post('/unban')
  async unBanUser(@Body() dto: BanUserDto) {
    return await this.userService.unBanUser(dto);
  }
}
