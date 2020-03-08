import {Component} from '@angular/core';
import {UsersService} from './services/userservice/users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private usersService: UsersService) {
    }

    // onSetToInactive(id: number) {
    //     this.usersService.inactiveUsers.push(this.usersService.activeUsers[id]);
    //     this.usersService.activeUsers.splice(id, 1);
    // }
    //
    // onSetToActive(id: number) {
    //     this.usersService.activeUsers.push(this.usersService.inactiveUsers[id]);
    //     this.usersService.inactiveUsers.splice(id, 1);
    // }
}
