import { IPost } from "./post";

export interface IUser {
    id: string;
    name: string;
    age: number;
    address?: string;
    listPosts?: IPost[]
}