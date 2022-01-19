import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {User} from '../../User';
import { UIService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();
  title = 'Create User';
  name!: string;
  surname!: string;
  age!: number;
  job!: string;
  showAddUser!: boolean;
  showEditUser!: boolean;
  subscriptionAdd!: Subscription;
  cancelSubscriptionAdd!: Subscription;

  constructor(private uiService: UIService) {
    this.subscriptionAdd = this.uiService.onToggleAdd().subscribe(value => this.showAddUser = value);
    this.cancelSubscriptionAdd = this.uiService.onToggleAdd().subscribe(value => this.showAddUser = value);
  }
 
  togglePageAdd(){
    this.uiService.toggleVisibilityCreate();
  }

  cancelVisibilityCreate(){
    this.uiService.cancelVisibility();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.name==null || this.surname==null || this.age==null || this.job==null){
      alert('Please fill all fields!');
      return;
    }else{
    const newUser = {
      name: this.name,
      surname: this.surname,
      age: this.age,
      job: this.job
    };

    this.onAddUser.emit(newUser);
    this.name='';
    this.surname='';
    this.age=0;
    this.job='';
  }
  } 
}
