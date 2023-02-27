import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) {}

//   getUser():any{
//  let myData =  this.http.get<any>('https://localhost:7071/api/Parking/home');
//  return myData;
//     }
 getUser():any{
   let myData =  this.http.get<any>('https://localhost:7083/api/Park/GetAllParking');
   return myData;
     }

     getEntreprise():any{
      let myData =  this.http.get<any>('https://localhost:7083/api/Entreprise/GetAllEntreprise');
      return myData;
         }

         addEntreprise(data:any){
          let myData =  this.http.post<any>('https://localhost:7083/api/Entreprise/addEntreprise',data);
          return myData;
             }

            getStagiaire():any{
              let myData =  this.http.get<any>('https://localhost:7083/api/Stagiaire/GetAllStagiaire');
              return myData;
                 }


              

                 
              getDiplome():any{
                let myData =  this.http.get<any>('https://localhost:7083/api/Diplome/GetAllDiplome');
                return myData;
               }

               addDiplome(data:any){
                let myData =  this.http.post<any>('https://localhost:7083/api/Diplome/addDiplome',data);
                 return myData;
               }
               addStagiaire(data:any){
                let myData =  this.http.post<any>('https://localhost:7083/api/Stagiaire/addStagiaire',data);
                 return myData;
               }

  }

