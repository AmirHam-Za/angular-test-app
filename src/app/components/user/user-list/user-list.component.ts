import { Component } from '@angular/core';
import { User } from '../../../interfaces/interfaces';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];
  
  constructor(
    private _userService: UserService,
    private _router: Router
    
    ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this._userService.getUsersAsync().subscribe((data: User[]) => {
      this.users = data
      console.log('users:', data)
    })
  }

    deleteUserById(id:string){
      this._userService.deleteUserByIdAsync(id).subscribe((res:User)=>{
        console.log(res)
        this.getUsers()
      })
    }

    editUserById(userId: string): void {
      this._router.navigate(['/users', userId, 'edit']);
    }
}
