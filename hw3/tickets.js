function TicketWindow() {
    let cash = 0;
    let tickets = [];
    let events = [];

    this.createEvent = (name, price) => {
        let event = events.find((item) => item.name === name);
        if (!event) {
            events.push({ name, price });
        }
    }

    this.buyTicket = (eventName) => {
        let ticketNumber = '';
        let event = events.find((item) => item.name === eventName);
        if (event) {
            ticketNumber = String(tickets.length + 1).padStart(6, '0');
            tickets.push(event.price);
            cash += event.price;
        }
        return ticketNumber
    }

    this.returnTicket = (ticketNumber) => {
        let i = Number(ticketNumber) - 1;
        let price = tickets[i];
        if (price) {
            cash -= price;
            tickets[i] = undefined;
        }
    }

    this.boxOffice = () => {
        return cash;
    }
}

let ticketWindow = new TicketWindow();
ticketWindow.createEvent('Concert', 500);

let ticket = ticketWindow.buyTicket('Concert');
console.log(ticketWindow.boxOffice());

ticketWindow.returnTicket(ticket);
console.log(ticketWindow.boxOffice());
