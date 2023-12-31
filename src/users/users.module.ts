import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ExampleMiddleware).forRoutes('users'); // this will hit all "/users" routes

    // consumer.apply(ExampleMiddleware).forRoutes(UsersController); // you can do above line or below line / this will hit all "/users" routes

    // you can also specify the routes instead of hitting all '/users' endpoints
    // middlware we not hit for 
    // http://localhost:3001/users  method POST
    // middlware will hit for 
    // http://localhost:3001/users  method GET
    // http://localhost:3001/users/queryparams?sortBy=ascending  method GET
    consumer.apply(ExampleMiddleware).forRoutes(
      {
        path: 'users',
        method: RequestMethod.GET
      },
      {
        path: 'users/:id',
        method: RequestMethod.GET
      },
    )
      // you can add more middleware like below (ignore if you wont want to do more middleware)
      // TO TEST
      // ROUTE :- http://localhost:3001/users
      // TYPE: - GET
      // Authorization - akshay123123
      .apply(AnotherMiddleware).forRoutes(
        {
          path: 'users',
          method: RequestMethod.GET
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET
        })
  }
}
