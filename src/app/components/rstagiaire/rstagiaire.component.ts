import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rstagiaire',
  templateUrl: './rstagiaire.component.html',
  styleUrls: ['./rstagiaire.component.scss']
})
export class RstagiaireComponent implements OnInit {
  stagiairelists :any ={
    nomStagiaire: '',
    region: '',
    etablissement: '',
    department: '',
    niveau: '',
    dateD: '',
    dateF: '',
    pdf: '',
    prenomStagiaire: '',
};
  constructor(private appservice:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
  getStagiaireFromData(){
  
    this.appservice.addStagiaire(this.stagiairelists).subscribe((result)=>{
      console.warn()
  
    })
  }
}
