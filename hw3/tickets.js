function TicketWindow() {
    let cash = 0;
    const tickets = [];
    const events = [];

    this.createEvent = (name, price) => {
        const event = events.find((item) => item.name === name);
        if (!event) {
            events.push({ name, price });
        }
    }

    this.buyTicket = (eventName) => {
        let ticketNumber = '';
        const event = events.find((item) => item.name === eventName);
        if (event) {
            ticketNumber = String(tickets.length + 1).padStart(6, '0');
            tickets.push(event.price);
            cash += event.price;
        }
        return ticketNumber
    }

    this.returnTicket = (ticketNumber) => {
        const i = Number(ticketNumber) - 1;
        const price = tickets[i];
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
