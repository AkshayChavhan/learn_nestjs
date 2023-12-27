import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createNewUser } from 'src/users/dtos/CreateNewUser.dto';
import { createNewUserWithValidation } from 'src/users/dtos/CreateNewUserWithValidation.dto';

@Controller('users')
export class UsersController {

    // http://localhost:3001/users
    @Get()
    getUser() {
        return [{ username: "akshay", email: "akshaychavhan676@gmail.com" }]
    }

    // Method1 (without validating Query parameter)
    // for query params
    // http://localhost:3001/users/queryparams?sortBy=ascending
    @Get('queryparams')
    getUserWithoutValidatingQuery(@Query('sortBy') sortBy: string) {
        console.log(sortBy);
        return [{ query: sortBy }]
    }


    // Method2 (with validating Query parameter)
    // for query params
    // http://localhost:3001/users/validatequeryparams?sortDesc=ascending   error:=> Validation failed (boolean string is expected)
    // http://localhost:3001/users/validatequeryparams?sortDesc=true 
    
    @Get('validatequeryparams')
    getUserWithValidatingQuery(@Query('sortDesc' , ParseBoolPipe) sortDesc: boolean) {
        console.log(sortDesc);
        return [{ query: sortDesc }]
    }


    // http://localhost:3001/users/posts
    @Get('posts')
    getUserPost() {
        return [{ posts: [{ id: 1, title: "post1" }, { id: 2, title: "post2" }] }]
    }

    // OPTION1 PARAMS
    // http://localhost:3001/users/123
    // @Get(':id')
    // getUserById(@Req() request: Request, @Res() response: Response) {
    //     console.log(request.params)
    //     response.send({ id : request.params})
    // }



    // OPTION2 PARAMS
    // http://localhost:3001/users/123
    // @Get(':id')
    // getUserById(@Param('id') id: string) {
    //     console.log(id)
    //     return { id }
    // }


    // OPTION3 PARAMS
    // http://localhost:3001/users/123/Akshay
    // @Get(':id/:userid')
    // getUserById(@Param('id') id: string, @Param('userid') userid: string) {
    //     console.log(id, userid)
    //     return { id: id, userid: userid }
    // }


    // OPTION4 PARAMS
    // here is validation to expect only number in param as id
    // http://localhost:3001/users/123 
    // http://localhost:3001/users/akshay  errror:-alidation failed (numeric string is expected)
    @Get('/:id')
    getMyUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        return { id: id }
    }


    // http://localhost:3001/users/
    //     {
    //     "username": "akshay",
    //         "email" : "akshay@rtledgers.com"
    // }
    @Post()
    createUser(@Req() request: Request, @Res() response: Response) {
        console.log(request.body);
        response.send("Created")
    }



    // method1 with no validation
    // http://localhost:3001/users/create
    // {
    //     "username": "akshay" ,
    //     "email" : "akshay@rtledgers.com"
    //   }
    @Post('create')
    createNewUser(@Body() userData: createNewUser) {
        console.log(userData);
        return {}
    }


    // method2 with validation
    // http://localhost:3001/users/validate
    // {
    //     "username": "akshay" ,
    //     "email" : "akshay@rtledgers.com"
    //   }
    @Post('validate')
    @UsePipes(new ValidationPipe())
    createNewUserValidate(@Body() userData: createNewUserWithValidation) {
        console.log(userData);
        return {}
    }


}
