import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterUserDto{
    @IsString()
    @IsNotEmpty()
    readonly fullName: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsString()
    @IsNotEmpty()
    readonly username: string;
}