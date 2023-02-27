import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-rentreprise',
  templateUrl: './rentreprise.component.html',
  styleUrls: ['./rentreprise.component.scss']
})
export class RentrepriseComponent implements OnInit {
  entrepriselists :any ={
      nomEntreprise: '',
      nomGerant: '',
      nomHr: '',
      region: '',
      department: '',
      poste: '',
      lien: '',
  };
  constructor(private appservice:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
getEntrepriseFromData(){
  
  this.appservice.addEntreprise(this.entrepriselists).subscribe((result)=>{
    console.warn()

  })
}
}
