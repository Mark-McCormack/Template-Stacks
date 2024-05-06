import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  updateUsers() {
    this.userService.updateUser({ name: 'Test', age: 123, username: 'Test123' });
  }
}
