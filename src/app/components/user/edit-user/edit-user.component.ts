import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../interfaces/interfaces';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  user: User = {
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
  };
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,

  ) { }

  ngOnInit(): void {
    const userId = String(this._route.snapshot.paramMap.get('id'))
    this._userService.getUserByIdAsync(userId).subscribe((user: User) => {
      this.user = user;
    });
  }

  updateUser(): void {
    this._userService.updateUserAsync(this.user).subscribe(() => {
      this._router.navigate(['/users']);
      }
    );
  }
}
