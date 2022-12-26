import { Controller, Get, Query } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { PostService } from "src/providers/post.service";
import { IPost } from "src/types/interfaces/post";

@ApiTags("Posts")
@Controller("post")
export class PostController {
    constructor(private readonly postService: PostService) {};

    @Get("/GetAll")
    GetAll(): IPost[] {
        return this.postService.GetAll();
    }
    
    @Get("/GetById")
    @ApiQuery({name: "id", required: true})
    GetById(@Query("id") id: string): IPost {
        return this.postService.GetById(id);
    }
}