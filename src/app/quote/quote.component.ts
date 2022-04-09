import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote[] = [
    new Quote(1, "Abraham Lincoln", "I don't like that man. I must get to know him better", 0, 0),
    new Quote(2, "Scottie Pippen", "Once you get a taste of success, it's a hard thing to turn down", 0, 0),
    new Quote(3, "Nadia Comaneci", "Enjoy the journey and try to get better every day. And don't lose the passion and the love for what you do", 0, 0),
    new Quote(4, "Albert Einstein", "Logic will get you from A to B. Imagination will take you everywhere", 0, 0),
  ] 

  toggleDetails(index:number){
    this.quote[index].showAuthor = !this.quote[index].showAuthor;
  }
  deleteQuote(isRead: any, index: number){
    if (isRead) {
      this.quote.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
