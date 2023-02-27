import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import axios from 'axios';
@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrls: ['./diplome.component.scss']
})
export class DiplomeComponent implements OnInit {
  public userLists :any;
  constructor(private appService:ApiService,private router:Router) { }

  ngOnInit(): void {
   
    this.getUser();
  }
 
 getUser(){
    this.appService.getDiplome().subscribe(
   (      result: any) => {
       this.userLists = result;
      console.log(result);
    }
   )
   
 }
}
