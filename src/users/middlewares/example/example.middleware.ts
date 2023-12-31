import { Get, HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("middleware implemented.")
    // You can regular stuffs like
    // req.body , req.params ,req.query ,req.header

    // to test authorization token 
    // add Authorization into 'postman' or 'thunderclient' => Headers
    // request type =>Get
    // request endpoint => http://localhost:3001/users
    const { authorization } = req.headers;
    if(!authorization) throw new HttpException('No Authorization token' ,HttpStatus.FORBIDDEN);
    // below is example not standard practice
    if(authorization === 'akshay123123') next();
    else throw new HttpException('Invalid Authorization token' ,HttpStatus.FORBIDDEN);
  }
}
