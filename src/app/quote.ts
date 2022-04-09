export class Quote {
    showAuthor: boolean;
    constructor(public id: number, public author: string, public quote: string, public upvote: number, public downvote: number,){
        this.showAuthor = false;
    }
}
