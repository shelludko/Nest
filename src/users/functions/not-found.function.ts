import { HttpException, HttpStatus } from '@nestjs/common';

export const ifUserNotFound = (user) => {
  if (!user) {
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
};
