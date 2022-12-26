import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './controllers/post.controller';
import { UserController } from './controllers/user.controller';
import { PostService } from './providers/post.service';
import { UserService } from './providers/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, PostController],
  providers: [AppService, UserService, PostService],
})
export class AppModule {}
