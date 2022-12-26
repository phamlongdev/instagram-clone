import { Controller, Get, Query } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { UserService } from "src/providers/user.service";
import { IUser } from "src/types/interfaces/user";

@ApiTags("Users")
@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {};

    @Get("/GetAll")
    GetAll(): IUser[] {
        return this.userService.GetAll();
    }
    
    @Get("/GetById")
    @ApiQuery({name: "id", required: true})
    GetById(@Query("id") id: string): IUser {
        return this.userService.GetById(id);
    }
}