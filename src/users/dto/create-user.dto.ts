import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    readonly fullName: string

    @IsEmail()
    @IsNotEmpty()
    readonly email: string

    @IsString()
    @IsNotEmpty()
    readonly password: string

    @IsString()
    @IsNotEmpty()
    readonly username: string

}