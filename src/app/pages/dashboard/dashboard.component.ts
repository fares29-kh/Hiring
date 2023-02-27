import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  connected: String | null = 'false';
  constructor(private router: Router) {
    // une fois lcomposant cree
    this.connected = localStorage.getItem('connected');
  }

  ngOnInit(): void {
    // demari pour chaque refresh
    if (this.connected == 'false' || this.connected == null) {
      // redirect vers la page login
      this.router.navigate(['/login']);
    }
  }
}
