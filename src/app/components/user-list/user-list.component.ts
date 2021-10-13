import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

//Servicios
import { UserService } from '../../services/user.service';
import { ItemUserListInterface, ItemUser } from '../../interfaces/item-user-list.interface';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit, AfterViewInit {

  public title: string = "Listado de usuarios";
  public loading = true;

  public currentPage: number = 1;
  public list: ItemUserListInterface;
  public users: ItemUser[];
  public total: number = 12;

  public selectedUser: ItemUser;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) { }

  ngAfterViewInit() {

  }

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

  updateList() {
    this.loading = true;
    this.userService.getUserList(this.currentPage)
      .subscribe(res => {
        this.users = res.data;
        this.loading = false;
      });
  }

  getUserInfo(id: number) {
    if (id != undefined) {
      this.userService.getUser(id)
        .subscribe(res => {
          this.selectedUser = res;
        })
    }
  }

  // Activa/desactiva el sidebar y obtiene el id del usuario
  openSideBar(el: any, id: number) {
    if (el._animationState == "open") {
      this.getUserInfo(id)
    }
    else {
      el.toggle();
      this.getUserInfo(id);
    }
  }

  closeSideBar(res: any, el: any) {
    if(res){
      el.toggle();
      this.updateList();
    }
  }


}
