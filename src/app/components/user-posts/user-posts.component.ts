import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ItemPostUser } from '../../interfaces/item-post-user.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit, OnChanges {

  @Input() id_usuario: number = 0;
  public postsList: ItemPostUser[];

  public loading: boolean = false;

  constructor(private userService: UserService) { }

  ngOnChanges(){
    this.loadPosts();
  }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.loading = true;
    this.userService.getUserPosts(this.id_usuario)
      .subscribe(res => {
        this.postsList = res;
        this.loading = false;
      })
  }

  deletePost(id) {
    Swal.fire({
      title: '¿Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUserPost(id)
          .subscribe((res: any) => {
            if (res.id === id) {
              Swal.fire(
                'Deleted!',
                'The selected post has been removed',
                'success'
              ).then(() => {
                this.loadPosts();
              })
            }
            else {
              Swal.fire(
                'Error!',
                'Something has ocurred, contact to admin',
                'error'
              )
            }
          })
      }
    })
  }

}
