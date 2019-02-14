import { Component }  from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { Observable } from "rxjs";
import { Router, NavigationEnd, NavigationCancel } from "@angular/router";
import { filter } from "rxjs/operators";
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { TouchSequence } from 'selenium-webdriver';

@Component({
    selector: "paMessages",
    templateUrl: "message.component.html",
})
export class MessageComponent{
    lastMessage: Message;
    constructor( messageService: MessageService, router: Router){
       messageService.messages.subscribe(m => this.lastMessage = m);
       router.events.pipe(filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel)).subscribe(e => {this.lastMessage = null});
    }
}