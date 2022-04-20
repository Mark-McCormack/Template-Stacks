import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss'],
})
export class GetComponent implements OnInit {
  constructor(private userService: UsersService) {}

  usersList: User[] = [];

  ngOnInit(): void {
    this.usersList = [];
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.usersList = res;
    });
  }
}
