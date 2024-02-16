import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [DatePipe]  // Add DatePipe as a provider
})
export class DetailsComponent {
  constructor(
    private service: HttpService,
    private route: ActivatedRoute,
    private datePipe: DatePipe // Inject DatePipe
  ) {}

  id: any;
  gameDetails: any;
  isShowLoader:any=true;

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['gameName']);
    console.log(this.id);

    this.getGameDetail();
  }

  getGameDetail() {
    this.service.getGameDetail(this.id).subscribe((response) => {
      this.gameDetails = response;
      this.gameDetails.released = this.datePipe.transform(
        this.gameDetails.released,
        'mediumDate'
      );
      this.isShowLoader = false;

    });
  }
}
