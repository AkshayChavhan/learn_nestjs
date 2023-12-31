import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class createPipeNewUser {
    @IsNotEmpty()
    username : string ;

    @IsNotEmpty()
    @IsEmail()
    email : string ;

    @IsNotEmpty()
    @IsNumber()
    age : number;
}