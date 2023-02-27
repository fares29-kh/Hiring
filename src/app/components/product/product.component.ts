import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

 public userLists :any;
constructor(private appService: ApiService, private router:Router) { }

  ngOnInit(): void {
    //this.getCategories();
   // this.todosList =this.appService.getUser();
  //  this.getUser();
  }
  // getUser(){
  //   this.appService.getUser().subscribe(
  //     (      result: any) => {
  //       this.userLists = result;
  //       console.log(result);
  //     }
  //   )
   
  // }
  event() {
    this.router.navigate(['stagiaires']);
  }
  event1() {
    this.router.navigate(['diplomé']);
  }
  event2() {
    this.router.navigate(['Entreprises']);
  }
//  getCategories(){
//    axios.get("https://localhost:7193/api/Parking/GetAllParking")
//    .then( res => {
//      console.log(res);
//   })
//    .catch(err=> {
//      console.log(err)
//   })
//  }
// public getMethode(){
// axios.get('https://localhost:7193/api/Parking/GetAllParking').
//   then( res => {
//        console.log(res);
//    })
// }
}
