import { IsEmail, IsNotEmpty } from "class-validator";

export class createNewUserWithValidation {
    @IsNotEmpty()
    username : string ;

    @IsNotEmpty()
    @IsEmail()
    email : string ;
}