import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ItemUser } from '../../interfaces/item-user-list.interface';

@Component({
  selector: 'app-user-detail-sidebar',
  templateUrl: './user-detail-sidebar.component.html',
  styleUrls: ['./user-detail-sidebar.component.css']
})
export class UserDetailSidebarComponent implements OnInit, OnChanges {

  @Input('user') userInfo: ItemUser = {
    id: null,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };

  @Output() closeElement = new EventEmitter<boolean>();

  public isSubmitted = false;

  public userDetailForm = this.fb.group({
    id: [this.userInfo.id || ''],
    email: [this.userInfo.email || ''],
    first_name: [this.userInfo.first_name || ''],
    last_name: [this.userInfo.last_name || '']
  })

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnChanges() {
    this.userDetailForm.controls['id'].setValue(this.userInfo.id);
    this.userDetailForm.controls['email'].setValue(this.userInfo.email);
    this.userDetailForm.controls['first_name'].setValue(this.userInfo.first_name);
    this.userDetailForm.controls['last_name'].setValue(this.userInfo.last_name);
    // this.userInfo = this.userInfo;
  }

  ngOnInit() {
    this.userDetailForm.controls['id'].setValue(this.userInfo.id);
    this.userDetailForm.controls['email'].setValue(this.userInfo.email);
    this.userDetailForm.controls['first_name'].setValue(this.userInfo.first_name);
    this.userDetailForm.controls['last_name'].setValue(this.userInfo.last_name);
  }

  updateUser() {
    console.log(this.userDetailForm.value);
  }

  close(){
    this.closeElement.emit(true);
  }

}
