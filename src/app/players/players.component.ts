import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  players = [
    {
      name: 'Virat Kohli',
      image: 'assets/images/virat.jpg',
      statistics: 'Batsman | Right-Handed | ODI Average: 59.07',
      achievements: 'ICC Cricketer of the Year, Multiple Centuries',
      highlights: 'Known for his exceptional batting skills and captaincy.'
    },
    {
      name: 'Rohit Sharma',
      image: 'assets/images/rohit.jpg',
      statistics: 'Batsman | Right-Handed | T20I Runs: 3,483',
      achievements: '3 Double Centuries, Many Records',
      highlights: 'The Hitman, known for his big innings and elegant shots.'
    },

    {
      name: 'Shikhar Dhawan',
      image: 'assets/images/shikhar.jpg',
      statistics: 'Batsman | Left-Handed | ODI Runs: 6,533',
      achievements: 'Multiple Centuries, ICC Golden Bat Winner',
      highlights: 'The Gabbar of Indian Cricket.known for his class.'
    },

    {
      name: 'Suresh Raina',
      image: 'assets/images/raina.jpg',
      statistics: 'Batsman | Left-Handed | T20I Runs: 8,326',
      achievements: 'First Indian to Score a Century in T20Is',
      highlights: 'One of the Best Fielders in Cricket.'
    },

    {
      name: 'Sachin Tendulkar',
      image: 'assets/images/sachin.jpg',
      statistics: 'Batsman | Right-Handed | Most Int Runs',
      achievements: '100 International Century',
      highlights: 'The God of Cricket.'
    },

    {
      name: 'Virender Sehwag',
      image: 'assets/images/sehwag.jpg',
      statistics: 'Batsman | Right-Handed | Test Triple Century',
      achievements: 'Fastest Triple Century in Test Cricket',
      highlights: 'The Nawab of Najafgarh.'
    },
    

    {
      name: 'Yuvraj Singh',
      image: 'assets/images/yuvi.jpg',
      statistics: 'All-Rounder | Left-Handed | 2011 WC Hero',
      achievements: 'Six Sixes in an Over, Man of the Tournament (2007)',
      highlights: 'The Sixer King.'
    },
    
    {
      name: 'Mohammed Shami',
      image: 'assets/images/shami.jpg',
      statistics: 'Bowler | Right-Arm Fast | ODI Wickets: 180+',
      achievements: 'Hat-Trick in 2019 World Cup, Consistent Wicket-Taker',
      highlights: 'Indias Premier Fast Bowler.'
    },
    {
      name: 'Jasprit Bumrah',
      image: 'assets/images/bumrah.jpg',
      statistics: 'Bowler | Right-Arm Fast | T20I Wickets: 70+',
      achievements: 'Yorker Specialist, Worlds Top Class Bowler,Yorker Specialist',
      highlights: 'Death Overs Specialist.'
    },
    
    
  ];
}
