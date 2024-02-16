import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{environment as env} from 'src/app/services/environmnet.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  header=  {
    'X-RapidAPI-Key': '42cba46185msh3932af082fde598p1d70bdjsn5822ba4f6c0e',
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
  };
   url = 'https://rawg-video-games-database.p.rapidapi.com/games?key=a867ef2711d5485bab4b414326406677';

   detailUrl = `https://rawg-video-games-database.p.rapidapi.com/games/3498?key=a867ef2711d5485bab4b414326406677`;


//   getGameList(
//     ordering:string,
//     search?:string
//   ):Observable<APIResponse<Game>>{
//     let params= new HttpParams().set('ordering',ordering);
//     if(search){
//       params= new HttpParams().set('ordering',ordering).set('search',search);
//     }
// return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{params:params})

//   }
getGameData():Observable<any>{
return this.http.get(`${this.url}`,{headers:this.header})
}
getGameDetail(gameID:any):Observable<any>{
  return this.http.get(`https://rawg-video-games-database.p.rapidapi.com/games/${gameID}?key=a867ef2711d5485bab4b414326406677`,{headers:this.header})

}
} 
