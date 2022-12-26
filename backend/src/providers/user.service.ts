import { Injectable } from '@nestjs/common';
import { IUser } from 'src/types/interfaces/user';

@Injectable()
export class UserService {
  GetAll(): IUser[] {
    return [{ id: '1', name: 'Petter', age: 20 }];
  }

  GetById(id: string): IUser {
    return { id: id, name: 'John', age: 18 };
  }
}
