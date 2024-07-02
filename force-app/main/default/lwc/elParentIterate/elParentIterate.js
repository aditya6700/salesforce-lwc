import { LightningElement, track } from 'lwc';

export default class ElParentIterate extends LightningElement {
    @track contactsList = [];
    @track contact = {}

    handleInputChange(event) {
        const { name, value } = event.target;
        this.contact = { ...this.contact, [name]: value };
    }
    
    addContactHandler() {
        this.contactsList.push(this.contact);
        this.contact = {}
    }
}