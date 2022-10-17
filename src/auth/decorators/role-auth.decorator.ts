import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

export enum RolesList {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
