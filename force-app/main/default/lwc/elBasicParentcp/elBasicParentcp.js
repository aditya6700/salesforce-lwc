import { LightningElement } from 'lwc';

export default class ElBasicParentcp extends LightningElement {
    contact = {};

    recieveData(event) {
        this.contact = event.detail;
    }
}