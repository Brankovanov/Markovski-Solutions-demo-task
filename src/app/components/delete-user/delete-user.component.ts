import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { User } from '../../User';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  @Input()user!: User;
  @Output()onDeleteUser: EventEmitter<User> = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(user: User | undefined){
    this.onDeleteUser.emit(user);
  }

}
