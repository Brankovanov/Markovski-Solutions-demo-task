import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../User';
import { UIService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  title = 'Users list';
  showTableUser :boolean = true;
  tableSubscription!:Subscription;

  constructor(private userService: UserService, private uiService: UIService) { 
    this.tableSubscription = this.uiService.onToggleTable().subscribe(value => this.showTableUser = value);
  }

  cancelVisibility(){
    this.uiService.cancelVisibility();
  } 

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users)=>this.users=users);
  }

  deleteUser(user: User){
    this.userService.deleteUser(user).subscribe(()=>this.users = this.users.filter(u => u.id !== user.id));
  }
  editUser(user: User){
    this.userService.editUser(user).subscribe((user)=>{
      const index = this.users.findIndex(u => u.id === user.id);
      this.users[index] = user;
    });
    this.cancelVisibility();
  }
  addUser(user: User){
    this.userService.addUser(user).subscribe((user)=>(this.users.push(user)));
    this.cancelVisibility();
  }

}
