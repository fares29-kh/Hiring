import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  event() {
    this.router.navigate(['RegisterStagiare']);
  }
  event1() {
    this.router.navigate(['RegisterDiplome']);
  }
  event2() {
    this.router.navigate(['RegisterEntreprise']);
  }
}
