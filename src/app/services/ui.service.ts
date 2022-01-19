import { Injectable } from '@angular/core';
import {Observable,Subject } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  private showAddUser: boolean=false;
  private showEditUser: boolean=false;
  private showTableUser: boolean=true;
  private subjectAdd = new Subject<any>();
  private subjectEdit= new Subject<any>();
  private subjectTable= new Subject<any>();
  constructor() { }

  toggleVisibilityCreate(): void{
    if(this.showAddUser===false){
      this.showAddUser=true;
      this.subjectAdd.next(this.showAddUser);
    } 
    if(this.showEditUser){
      this.showEditUser=false;
      this.subjectEdit.next(this.showEditUser);
    }
    if(this.showTableUser){
      this.showTableUser=false;
      this.subjectTable.next(this.showTableUser);
    }
  }

  cancelVisibility(): void{
    if(this.showAddUser===true){
      this.showAddUser=false;
      this.subjectAdd.next(this.showAddUser);
    } 
    if(this.showEditUser){
      this.showEditUser=false;
      this.subjectEdit.next(this.showEditUser);
    }
    if(!this.showTableUser){
      this.showTableUser=true;
      this.subjectTable.next(this.showTableUser);
      console.log(this.showTableUser)
    }
  }

  toggleVisibilityEdit(user: User): void{
    if(!this.showEditUser){
      this.showEditUser=true;
      this.subjectEdit.next(user.id);
    }

    if(this.showAddUser){
      this.showAddUser=false;
      this.subjectAdd.next(this.showAddUser);
    }
    if(this.showTableUser){
      this.showTableUser=false;
      this.subjectTable.next(this.showTableUser);
    }
  }

  onToggleAdd(): Observable<any>{
    return this.subjectAdd.asObservable();
  }
  onToggleEdit(): Observable<any>{
    return this.subjectEdit.asObservable();
  }
  onToggleTable(): Observable<any>{
    return this.subjectTable.asObservable();
  }
}
