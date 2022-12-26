import { Injectable } from '@nestjs/common';
import { IPost } from 'src/types/interfaces/post';

@Injectable()
export class PostService {
  GetAll(): IPost[] {
    return [
      {
        id: '1',
        caption: 'Today i feel so good!',
      },
    ];
  }

  GetById(id: string): IPost {
    return {
      id: id,
      caption: 'Today i feel so bad!',
    };
  }
}
