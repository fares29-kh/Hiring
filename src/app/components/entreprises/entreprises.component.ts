import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent implements OnInit {
 public entrepriselists :any;
  constructor(private appservice: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getentreprises();
  }
getentreprises(){
  this.appservice.getEntreprise().subscribe(
    (  result:any )=>{
      this.entrepriselists=result;
      console.log(result);
    })

}
}
