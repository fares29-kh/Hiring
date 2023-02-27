import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.scss']
})
export class StagiairesComponent implements OnInit {
public stagiairelists:any;
  constructor(private appservice:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getstagiaires();
  }
getstagiaires(){
  this.appservice.getStagiaire().subscribe(
    ( result:any )=>{
      this.stagiairelists=result;
      console.log(result);
    }
  )
}
}
