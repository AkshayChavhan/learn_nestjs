import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';


@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    console.log("Inside pipes.");
    console.log("value => ", value);
    console.log("metadata => ", metadata);

    const parseAgeToInt = parseInt(value.age.toString());
    if(isNaN(parseAgeToInt)){
      console.log(`${parseAgeToInt} is not a number.`);
      throw new HttpException(
        'Invalid datatype for the property age.Expected number',
        HttpStatus.BAD_REQUEST
      );
    }
    console.log(`${parseAgeToInt} is a number ,returning...`);
    
    return {...value , age : parseAgeToInt};
  }
}
