import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dtos/register.dto';
import { Serialize } from 'src/interceptors/serialize-interceptor';
import { AuthDto } from './dtos/auth.dto';

@Controller('auth')
@Serialize(AuthDto)
export class AuthController {
    constructor( private readonly authService: AuthService){}

    @Post('register')
    async register(@Body() registerUserDto: RegisterUserDto){
        return this.authService.register(registerUserDto)
    }
}
