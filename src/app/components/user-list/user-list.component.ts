import { Component, OnInit, ViewChild } from '@angular/core';

//Servicios
import { UserService } from '../../services/user.service';
import { ItemUserListInterface, ItemUser } from '../../interfaces/item-user-list.interface';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  public title: string = "Listado de usuarios";
  public loading = true;

  public currentPage: number = 1;
  public list: ItemUserListInterface;
  public users: ItemUser[];
  public total: number = 12;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsuariosByPage();
  }

  public handlePage(e: any) {
    this.currentPage = this.paginator.pageIndex + 1;
    this.updateList();
  }

  getUsuariosByPage() {
    this.loading = true;
    this.userService.getUserList(this.currentPage)
      .subscribe(res => {
        this.list = res;
        this.users = res.data;
        this.loading = false;
      });
  }

  updateList(){
    this.loading = true;
    this.userService.getUserList(this.currentPage)
      .subscribe(res => {
        this.users = res.data;
        this.loading = false;
      });
  }

}
