import { LightningElement, api } from 'lwc';

export default class ElBasicParent extends LightningElement {
    contact = {
        name: '',
        title: '',
        phone: ''
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.contact = { ...this.contact, [name]: value };
        console.log(this.contact)
    }
}