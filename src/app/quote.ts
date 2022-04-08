export class Quote {
    id: number;
    author: string;
    quote: string;
    upvote: number;
    downvote: number;
    constructor(id: number, author: string, quote: string, upvote: number, downvote: number,){
        this.id = id;  
        this.author = author;
        this.quote = quote;
        this.upvote = upvote;
        this.downvote = downvote;
    }
}
