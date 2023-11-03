import { Component } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  upcomingMatches = [
    {
      date: '2023-11-01',
      teams: 'INDIA vs. NETHERLAND',
      venue: 'DHARAMSHALA STADIUM',
      image: 'assets/images/dharamshala.jpg'
    },
    {
      date: '2023-11-02',
      teams: 'INDIA  vs. SOUTH AFRICA',
      venue: 'EDEN GARDENS',
      image: 'assets/images/eden.jpg'
    },
    {
      date: '2023-11-03',
      teams: 'AUSTRALIA vs. SRILANKA',
      venue: 'MELBOURNE CRICKET GROUND',
      image: 'assets/images/mcg.jpg'
    },
  ];

  recentResults = [
    {
      date: '2023-10-28',
      teams: 'INDIA vs. PAKISTAN',
      result: 'INDIA won by 10 wickets',
    },
    {
      date: '2023-10-29',
      teams: 'AFGHANISTAN vs PAKISTAN',
      result: 'AFGHANISTAN won by 10 wickets',
    },
    {
      date: '2023-10-30',
      teams: 'NEPAL vs PAKISTAN',
      result: 'NEPAL won by 10 wickets',
    },
  ];
}
