import { LightningElement } from 'lwc';

export default class ExperienceComponent extends LightningElement {
    contacts = [
        {
            "Id": "003171931112854375",
            "name": "Frodo Baggins",
            "title": "Ring Bearer"
        },
        {
            "Id": "003192301009134555",
            "name": "Aragorn",
            "title": "King of Gondor"
        },
        {
            "Id": "003848991274589432",
            "name": "Gandalf",
            "title": "Wizard"
        },
        {
            "Id": "003948391009182374",
            "name": "Legolas",
            "title": "Prince of Mirkwood"
        },
        {
            "Id": "003124589100948273",
            "name": "Gimli",
            "title": "Dwarf Warrior"
        },
        {
            "Id": "003839203918204874",
            "name": "Samwise Gamgee",
            "title": "Faithful Companion"
        },
        {
            "Id": "003817391009183746",
            "name": "Boromir",
            "title": "Captain of Gondor"
        },
        {
            "Id": "003738292918230487",
            "name": "Galadriel",
            "title": "Lady of Lothlórien"
        },
        {
            "Id": "003817202918230987",
            "name": "Elrond",
            "title": "Lord of Rivendell"
        },
        {
            "Id": "003748201918203847",
            "name": "Saruman",
            "title": "Head of the White Council"
        }
    ]
    filteredContacts;

    handleInputChange(event) {
        if (event.target.value) {
            this.filteredContacts = this.contacts.filter(con => con.name.toLowerCase().includes(event.target.value.toLowerCase()));
        } else {
            this.filteredContacts = []
        }
    }
}