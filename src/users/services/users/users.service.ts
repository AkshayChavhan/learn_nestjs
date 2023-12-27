import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable() // this keyword is show that this services is injectable and we injected it in user controller
export class UsersService {

    private fakeUsers = [{ username: "akshay", email: "akshaychavhan676@gmail.com" }]; //fake data for now
    fetchUsers() {
        return this.fakeUsers;
    }


    createUsers(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails);
        return this.fakeUsers;
    }


    fetchUserById(id: number) {
        return { id, username: 'Roshani', email: 'roshani@gmail.com' }
    }
}
