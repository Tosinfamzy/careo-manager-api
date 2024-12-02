import { IsEmail, MinLength } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;
  @MinLength(4)
  username: string;

  @MinLength(10)
  password: string;
}
