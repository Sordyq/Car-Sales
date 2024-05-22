import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dtos/register.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){}

    async register(registerUserDto: RegisterUserDto){
        const user = await this.usersService.find(registerUserDto.email);
        if(user.length){
            throw new BadRequestException("User Already Exist")
        }
    }
}
