import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  campaigns = [
    { id: 1, name: "nutella", image: "../../../../../assets/campaigns/1.png" },
    { id: 2, name: "kinder", image: "../../../../../assets/campaigns/2.png" },
    { id: 2, name: "mon_cheri", image: "../../../../../assets/campaigns/3.png" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
