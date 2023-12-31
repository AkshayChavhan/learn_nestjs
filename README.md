REFER TUT:- https://www.youtube.com/watch?v=xzu3QXwo1BU

Introduction
Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!

Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform.



Philosophy#
In recent years, thanks to Node.js, JavaScript has become the “lingua franca” of the web for both front and backend applications. This has given rise to awesome projects like Angular, React and Vue, which improve developer productivity and enable the creation of fast, testable, and extensible frontend applications. However, while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript), none of them effectively solve the main problem of - Architecture.

Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular.



Installation#
To get started, you can either scaffold the project with the Nest CLI, or clone a starter project (both will produce the same outcome).

To scaffold the project with the Nest CLI, run the following commands. This will create a new project directory, and populate the directory with the initial core Nest files and supporting modules, creating a conventional base structure for your project. Creating a new project with the Nest CLI is recommended for first-time users. We'll continue with this approach in First Steps.


$ npm i -g @nestjs/cli
$ nest new project-name

HINT
To create a new TypeScript project with stricter feature set, pass the --strict flag to the nest new command.



Alternatives#
Alternatively, to install the TypeScript starter project with Git:

$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start


Now you will see few files where 
main.ts file is actually a STARTER MAIN file.

lets delete all controller and services and create it manuallly.

-You can get help for the command using 

$ nest generate -help


-CREATE A MODULE ( name :- users)
Here a folder name users will created and new module is updated in app module too.

$ nest generate module users

-CREATE A CONTROLLER for users modules
for every controller ,a test file will created for example. users.controller.spec.ts


$ nest generate controller /users/controllers/users


-CREATING FIRST GET REQUEST
here @Get from nest is Get decorator from nestjs.
Create method in user controller for get request
getUser

-CREATING SECOND GET REQUEST
here @Get from nest is Get decorator from nestjs.
Create method in user controller for get request
getUserPost

-CREATING THIRD GET REQUEST by using PARAMS
Create method in user controller for get request
getUserById

-CREATING FIRST POST REQUEST
here @Post from nest is Post decorator from nestjs.
Create method in user controller for post request
createUser

-CREATING SECOND POST REQUEST
Create method in user controller for post request
createNewUser where you will get userdata directly using DTO.


## VALIDATION USING CLASS-VALIDATOR and CLASS-TRANSFORMER

Here in function createUser I am creating user with user data but here first I want to validate the payload.For that we need to packages class-validator and class-transformer.

$ npm i class-validator class-transformer


<!-- SERVICES -->
- GENERATE SERVICES LIKE BELOW
$ nest generate service /users/services/users

OR

$ nest g s /users/services/users




<!-- MIDDLEWARES -->
You can check commands on
$ nest generate --help

To generate middleware
$ nest generate middleware /users/middlewares/example



OR

$ nest g mi /users/middlewares/example

Now example.middleware.ts file is generated which is an INJECTABLE file as we used @Injectable() from @nestjs/common.


Now we need to use it in module 
@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}




To use it , we need to do.

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      // consumer.apply(ExampleMiddleware).forRoutes('users');
      consumer.apply(ExampleMiddleware).forRoutes(UsersController); // you can do above line or below line
  }
}


Now you can test it by hitting in all '/users' endpoint ,we will first visit middleware.


If you want to specify the route where middleware should run then you can do it like below 




If you want to apply more middleware before hitting the routes ,we can do that like 
here in for which we are creating new middleware 

$ nest g mi /users/middlewares/Another


## PIPE
Pipes is used to transform and validate data .


To see schematic collections:-

$ nest g -h

$ nest g pipe /users/pipes/ValidateCreateUser



## GUARDS

To create a guard
$ nest g guard /users/guards/Auth