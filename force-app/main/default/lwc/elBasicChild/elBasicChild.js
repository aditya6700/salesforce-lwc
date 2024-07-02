import { LightningElement, api } from 'lwc';

export default class ElBasicChild extends LightningElement {
    @api contact;

    get contactName() {
        return this.contact.name;
    }
}