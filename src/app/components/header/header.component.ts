import { Component, OnInit } from '@angular/core';
import { UIService } from '../../services/ui.service';
import {User} from '../../User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Markovski Solutions demo task';
  showAddUser!: boolean;
  showEditUser!:boolean;
  showTableUser!: boolean;
  subscriptionAdd!: Subscription;
  cancelSubscriptionAdd!: Subscription;
  subscriptionEdit!: Subscription;
  tableSubscription!:Subscription;

  constructor(private uiService: UIService) {
    this.subscriptionAdd = this.uiService.onToggleAdd().subscribe(value => this.showAddUser = value);
    this.cancelSubscriptionAdd = this.uiService.onToggleAdd().subscribe(value => this.showAddUser = value);
    this.subscriptionEdit = this.uiService.onToggleEdit().subscribe(value => this.showEditUser = value);
    this.tableSubscription = this.uiService.onToggleTable().subscribe(value => this.showTableUser = value);
  }


  ngOnInit(): void {}

  togglePage(user: User){
    this.uiService.toggleVisibilityEdit(user);
  }
  
  togglePageAdd(){
    this.uiService.toggleVisibilityCreate();
  }
  cancelVisibility(){
    this.uiService.cancelVisibility();
  }
}
