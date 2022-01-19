import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../User';
import { UIService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {
  @Input()user!: User;
  showEditUser!: number;
  showTableUser!: boolean;
  subscriptionEdit!: Subscription;
  tableSubscription!:Subscription;

  constructor(private uiService: UIService) {
    this.subscriptionEdit = this.uiService.onToggleEdit().subscribe(value => this.showEditUser = value);
    this.tableSubscription = this.uiService.onToggleTable().subscribe(value => this.showTableUser = value);
  
  }

  togglePage(){
    this.uiService.toggleVisibilityEdit(this.user);
  }

  cancelVisibilityCreate(){
    this.uiService.cancelVisibility();
  }
  ngOnInit(): void {
  }

}
