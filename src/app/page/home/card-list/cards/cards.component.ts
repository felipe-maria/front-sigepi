import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

    rows: any[] = [];
    cards: Card[] =
        [
            {
                title: 'Manage tickets',
                text: 'Shows a list of all tickets that I can see',
                buttonText: 'Manage tickets',
                url: '/tickets/list'
            },
            {
                title: 'Create a ticket',
                text: 'Create a ticket to Help-desk team',
                buttonText: 'Open a ticket',
                url: '/tickets/add'
            },
            {
                title: 'Manage certificates',
                text: 'Shows a list of all digital certificates on the system',
                buttonText: 'Manage certificates',
                url: '/certificates/list'
            },
            {
                title: 'Create a certificate',
                text: 'Create a digital certificate control',
                buttonText: 'Create a certificate',
                url: '/certificates/add'
            }
        ];

    constructor() { }

    ngOnInit(): void {
        this.rows = this.groupColumns(this.cards);
    }

    groupColumns(cards: Card[]) {
        const newRows = [];
        const columnsSize = 2;

        for (let index = 0; index < cards.length; index += columnsSize) {
            newRows.push(cards.slice(index, index + columnsSize));
        }

        return newRows;
    }

}
