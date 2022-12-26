import { IComment } from "./comment";

export interface IPost {
    id: string;
    caption: string;
    images?: string[];
    likes?: number;
    shares?: number;
    comments?: IComment[];
}