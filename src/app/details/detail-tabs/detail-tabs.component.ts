import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-tabs',
  templateUrl: './detail-tabs.component.html',
  styleUrls: ['./detail-tabs.component.scss']
})
export class DetailTabsComponent {
  @Input() game:any;


  gameDetails :any;
  ngOnInit(){
    this.gameDetails=this.game;
    console.log("gamedetails= ", this.gameDetails);
    console.log("gamedplatform= " ,this.gameDetails.parent_platforms);
   
   }
}
