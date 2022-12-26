import { Timestamp } from "rxjs";

export interface IComment {
    id: string;
    idUser: string;
    content: string;
    timestamp: Timestamp<number>;
}