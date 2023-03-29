export class Payment {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} of this details${this.details} paying ${this.amount}`;
    }
}
