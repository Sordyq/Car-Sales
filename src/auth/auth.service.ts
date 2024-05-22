import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dtos/register.dto';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){}

    async register(registerUserDto: RegisterUserDto){
        const users = await this.usersService.find(registerUserDto.email);
        if(users.length){
            throw new BadRequestException("User Already Exist")
        }
        const hashPassword = await bcrypt.hash(registerUserDto.password, 10);
        const user = await this.usersService.create({...registerUserDto, password: hashPassword});

        return user;
    }
}
