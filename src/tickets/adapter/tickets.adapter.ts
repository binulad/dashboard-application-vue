import { Adapter } from "@/adapter/adapter";
import {
  AddUpdateTickets,
  EditTickets,
  Tickets,
} from "@/tickets/model/tickets.model";

class TicketsAdapterObj implements Adapter<Tickets[]> {
  /**
   * This will convert the response into Ticket object
   * @param tickets
   */
  public toResponse(tickets: Tickets[]): Tickets[] {
    const ticketsArray: Tickets[] = [];
    tickets.forEach((ticket) => {
      const ticketData: Tickets = new Tickets(
        ticket.id,
        ticket.subject,
        ticket.assignee,
        ticket.requestedBy,
        ticket.priority,
        ticket.status,
        ticket.createdDate,
        ticket.dueDate
      );
      ticketsArray.push(ticketData);
    });
    return ticketsArray;
  }
}

export const TicketsAdapter = new TicketsAdapterObj();

class TicketsAddUpdateObj implements Adapter<AddUpdateTickets> {
  /**
   * This will used to convert object into ticket request object
   * @param ticket
   */
  public toRequest(ticket: AddUpdateTickets): AddUpdateTickets {
    const AddUpdateTicketData: AddUpdateTickets = new AddUpdateTickets(
      ticket.subject,
      ticket.assignee,
      ticket.requestedBy,
      ticket.priority,
      ticket.status,
      ticket.createdDate,
      ticket.dueDate
    );
    return AddUpdateTicketData;
  }
}

export const TicketsAddUpdate = new TicketsAddUpdateObj();

class TicketsEditAdapterObj implements Adapter<EditTickets> {
  /**
   * This will used to convert object into ticket request object
   * @param ticket
   */
  toResponse(ticket: EditTickets): EditTickets {
    const EditTicketsData: EditTickets = new EditTickets(
      ticket.id,
      ticket.subject,
      ticket.assignee,
      ticket.requestedBy,
      ticket.priority,
      ticket.status,
      ticket.createdDate,
      ticket.dueDate
    );
    return EditTicketsData;
  }
}

export const TicketsEditAdapter = new TicketsEditAdapterObj();
