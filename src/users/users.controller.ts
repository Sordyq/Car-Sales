import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { Serialize } from 'src/interceptors/serialize-interceptor';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
    constructor(private UserService: UsersService){}

    @Post('/create')
    createUser(@Body() createUserDto: CreateUserDto){
        this.UserService.create(createUserDto)
    }

    @Get('/:id')
    findUser(@Param('id') id: string){
        return this.UserService.findOne(parseInt(id))
    }

    @Get()
    findAllUsers(@Query('email')email: string){
        return this.UserService.find(email)
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string){
        return this.UserService.remove(parseInt(id))
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        return this.UserService.update(parseInt(id), updateUserDto)
    }
}
