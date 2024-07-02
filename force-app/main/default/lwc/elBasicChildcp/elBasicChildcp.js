import { LightningElement } from 'lwc';

export default class ElBasicChildcp extends LightningElement {
    contact = {
        name: '',
        title: '',
        phone: ''
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.contact = { ...this.contact, [name]: value };
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('senddata', {
            detail: this.contact
        }));
        Object.keys(this.contact).forEach(key => this.contact[key] = '')
    }

}