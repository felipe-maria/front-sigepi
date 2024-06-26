import {NgModule} from "@angular/core";
import {AddTicketComponent} from "./add-ticket/add-ticket.component";
import {FormsModule} from "@angular/forms";
import {
  CancelTicketCreationModalComponent
} from "./cancel-ticket-creation-modal/cancel-ticket-creation-modal.component";
import {SharedModule} from "../../shared/shared.module";
import {DeleteTicketModalComponent} from "./delete-ticket-modal/delete-ticket-modal.component";
import {EditTicketComponent} from "./edit-ticket/edit-ticket.component";
import {ListTicketComponent} from "./list-ticket/list-ticket.component";

@NgModule({
    declarations: [
        AddTicketComponent,
        CancelTicketCreationModalComponent,
        ListTicketComponent,
        DeleteTicketModalComponent,
        EditTicketComponent
    ],
    imports: [
        FormsModule,
        SharedModule
    ],
    exports: [
        AddTicketComponent,
        CancelTicketCreationModalComponent,
        ListTicketComponent,
        DeleteTicketModalComponent,
        EditTicketComponent
    ]
})
export class TicketsModule {

}
