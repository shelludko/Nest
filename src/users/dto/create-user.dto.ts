import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'vitaliy@gmail.com', description: 'User email' })
  readonly email: string;

  @ApiProperty({ example: '123', description: 'User password' })
  readonly password: string;
}
