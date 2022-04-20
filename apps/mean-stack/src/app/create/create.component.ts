import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {}

  addUser(user: User) {
    this.userService.createUsers(user).subscribe({
      next: () => {
        this.router.navigate(['/create']);
      },
      error: (error) => {
        alert('Failed to create user');
        console.error(error);
      },
    });
  }
}
