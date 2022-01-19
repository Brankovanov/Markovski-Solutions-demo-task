import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import {User} from '../../User';
import { UIService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input()user!: User;
  @Output() onEditUser: EventEmitter<User> = new EventEmitter();
  title = 'Edit user';
  name!: string ;
  surname!: string;
  age!: number;
  job!: string;
  showEditUser!: number;
  subscriptionEdit!: Subscription;
 

  constructor(private uiService: UIService) {
    this.subscriptionEdit = this.uiService.onToggleEdit().subscribe(value => this.showEditUser = value);
    
  }

  cancelVisibility(){
    this.uiService.cancelVisibility();
  }

  ngOnInit(): void {
    this.name= this.user.name;
    this.surname= this.user.surname;
    this.age=this.user.age;
    this.job= this.user.job;

  }
  onSubmit(): void {
    if(this.name==null || this.surname==null || this.age==null || this.job==null){
        alert('Please fill all fields!');
        return;
    }else{
      const newUser = {
        id: this.user.id,
        name: this.name,
        surname: this.surname,
        age: this.age,
        job: this.job
      };

      this.onEditUser.emit(newUser);
    }
  } 
}
