import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-detail-sidebar',
  templateUrl: './user-detail-sidebar.component.html',
  styleUrls: ['./user-detail-sidebar.component.css']
})
export class UserDetailSidebarComponent implements OnInit {

  public isSubmitted = false;
  public userDetailForm = this.fb.group({
    id: [''],
    email: [''],
    first_name: [''],
    last_name: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  updateUser(){
    console.log("actualizar");
    
  }

}
