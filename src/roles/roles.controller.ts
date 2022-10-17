import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles, RolesList } from 'src/auth/decorators/role-auth.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 200 })
  @Roles(RolesList.ADMIN)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Post('create')
  async create(@Body() dto: CreateRoleDto) {
    return await this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Get role by value' })
  @ApiResponse({ status: 200 })
  @Roles(RolesList.ADMIN)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Get(':value')
  async getByValue(@Param('value') value: string) {
    return await this.roleService.getRoleByValue(value);
  }
}
