import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: User={
    id: '',
    title: '',
    isActive: false,
    picture: '',
    age: '',
    gender: '',
    company: '',
    email: '',
    phone: '',
    address: ''
  }
  
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
  ){}
    ngOnInit(): void {
      const userIdFromRoute = String(this._route.snapshot.paramMap.get('id'))
      
      this._userService.getUserByIdAsync(userIdFromRoute).subscribe((res:User)=>{
        this.user = res
        console.log(res)
      })
    }
}
