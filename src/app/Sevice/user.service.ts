import { Injectable } from "@angular/core";
import { User } from "../Models/Users";


@Injectable({
    providedIn: 'root'
})

export class UserService{
    users: User[]=[
       new User(1, 'Sudip Spkota', 'sudip', '12345'),
       new User(1, 'b Spkota', 'js', '12345'),
        new User(1, 'c Spkota', 'ms', '12345'),
        new User(1, 'd Spkota', 'ss', '12345'),
    ]
}
