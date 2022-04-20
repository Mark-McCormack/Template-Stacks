import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {}

  deleteUser() {
    this.userService.deleteUser().subscribe({
      next: () => {
        this.router.navigate(['/delete']);
      },
      error: (error) => {
        alert('Failed to delete user');
        console.error(error);
      },
    });
  }
}
