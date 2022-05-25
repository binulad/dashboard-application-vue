import { Http } from "@/services/http-client";
import {
  TicketsAdapter,
  TicketsAddUpdate,
  TicketsEditAdapter,
} from "@/tickets/adapter/tickets.adapter";
import { TicketsConstants } from "@/tickets/constants";
import { AddUpdateTickets } from "@/tickets/model/tickets.model";
class Tickets {
  /**
   * Gets all tickets
   */
  getTickets(): Promise<any> {
    return Http.get(TicketsConstants.API_URL.TICKETS).then((ticketResponse) => {
      return TicketsAdapter.toResponse(ticketResponse.data);
    });
  }

  /**
   * Delete tickets
   * @param id : ticket Id
   */
  deleteTicket(id: any): Promise<any> {
    return Http.delete(`${TicketsConstants.API_URL.TICKETS}/${id}`);
  }

  /**
   * Add tickets
   * @param ticketsData : Tickets Data
   */
  addUpdateTicket(ticketsData: AddUpdateTickets): Promise<any> {
    const data: AddUpdateTickets = TicketsAddUpdate.toRequest(ticketsData);
    return Http.post(TicketsConstants.API_URL.TICKETS, data);
  }

  /**
   * Get tickets by ID
   * @param ticketId : Ticket ID
   */
  getTicketById(ticketId: any): Promise<any> {
    return Http.get(`${TicketsConstants.API_URL.TICKETS}/${ticketId}`).then(
      (editTicketResponse) => {
        return TicketsEditAdapter.toResponse(editTicketResponse.data);
      }
    );
  }

  /**
   * Update tickets by ID
   * @param ticketId : Ticket ID
   * @param ticketData : Ticket Data
   */
  updateTicketById(ticketId: any, ticketData: AddUpdateTickets): Promise<any> {
    const data: AddUpdateTickets = TicketsAddUpdate.toRequest(ticketData);
    return Http.put(`${TicketsConstants.API_URL.TICKETS}/${ticketId}`, data);
  }
}

export const TicketServices = new Tickets();
