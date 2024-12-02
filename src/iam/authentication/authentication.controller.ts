import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginDto } from './dto/sign-in.dto/login.dto';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type.enum';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Auth(AuthType.None)
@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @ApiBody({ type: SignUpDto })
  @Post('register')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @ApiBody({ type: LoginDto })
  @HttpCode(HttpStatus.OK) // by default @Post does 201, we need 200
  @Post('login')
  signIn(@Body() LoginDto: LoginDto) {
    return this.authService.signIn(LoginDto);
  }

  @ApiBody({ type: RefreshTokenDto })
  @HttpCode(HttpStatus.OK) // changed since the default is 201
  @Post('refresh-tokens')
  refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshTokens(refreshTokenDto);
  }
}
