import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private http: HttpService,private route:Router) {}

  sort: string = '';
  games: any;
  sortingOptions = ['Name', 'Released', 'Updated', 'Rating'];
  sortedGmaed: any;
  isShowLoader = true;

  ngOnInit() {
    this.getGameData();
  }
  defaultImage = 'src/assets/images/platform/ios.svg';
  platformImageError: boolean = false;

  getGameData() {
    this.http.getGameData().subscribe((response) => {
      this.games = response.results;
      this.isShowLoader = false;
    });
  }

  onSortChange(event: any) {
    this.sort = event.value;

    console.log(this.sort);
    if (this.sort === 'Name') {
      this.games.sort((a: any, b: any) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    if (this.sort === 'Released') {
      this.games.sort((a: any, b: any) => {
        let releasedA = new Date(a.released);
        let releasedB = new Date(b.released);

        // For ascending order
        return releasedA.getTime() - releasedB.getTime();

        // For descending order
        // return releasedB.getTime() - releasedA.getTime();
      });
    }
    if (this.sort === 'Updated') {
      this.games.sort((a: any, b: any) => {
        let releasedA = new Date(a.updated);
        let releasedB = new Date(b.updated);

        // For ascending order
        return releasedA.getTime() - releasedB.getTime();

        // For descending order
        // return releasedB.getTime() - releasedA.getTime();
      });
    }
    if (this.sort === 'Rating') {
      this.games.sort((a: any, b: any) => {
        // Assuming 'rating' is a numerical property
        let ratingA = a.rating;
        let ratingB = b.rating;

        // For ascending orde
        return ratingB - ratingA;

        // For descending order
        // return ratingB - ratingA;
      });
    }
  }

  navigateToDetails(id:any,name:any){
    this.route.navigate(['search',id,name])
}
}
