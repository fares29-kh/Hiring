import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rdiplome',
  templateUrl: './rdiplome.component.html',
  styleUrls: ['./rdiplome.component.scss']
})
export class RdiplomeComponent implements OnInit {
  diplomelists :any ={
    nomDiplome: '',
    prenomDiplome: '',
    etablissement: '',
    region: '',
    statut: '',
    department: '',
    cv: '',
};
  constructor(private appservice:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
  getDiplomeFromData(){
  
    this.appservice.addDiplome(this.diplomelists).subscribe((result)=>{
      console.warn()
  
    })
  }
}
