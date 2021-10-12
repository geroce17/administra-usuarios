import { Component, OnInit } from '@angular/core';

//Servicios
import { UserService } from '../../services/user.service';
import { ItemUserListInterface, ItemUser } from '../../interfaces/item-user-list.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public title: string = "Listado de usuarios";

  public currentPage: number = 1;
  public list: ItemUserListInterface;
  public users: ItemUser[];

  constructor(private userService: UserService) {
    
  }
  ngOnInit(){
    this.userService.getUserList(this.currentPage)
    .subscribe(res => {
      this.list = res;
      this.users = res.data;
      console.log(this.users);
      
    });
  }



}
