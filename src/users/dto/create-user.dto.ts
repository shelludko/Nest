import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'admin@gmail.com', description: 'User email' })
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({ example: '123', description: 'User password' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Not less than 6 characters' })
  @MaxLength(20, { message: 'Not more than 20 characters' })
  readonly password: string;
}
