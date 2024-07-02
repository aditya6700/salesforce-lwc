import { LightningElement } from 'lwc';

export default class ElBasic extends LightningElement {

    //* Task 1
    title = 'LWC Basics Day 1';
    todaysDate = new Date();
    myName = 'Sai Aditya Devulapalli';

    //* Task 2
    inputText = '';
    inputTextHandler(event) {
        this.inputText = event.target.value
    }

    //* Task 3
    nameObj = {
        firstName: '',
        lastName: ''
    }
    nameHandler(event) {
        const { value, name } = event.target;
        this.nameObj = {
            ...this.nameObj,
            [name]: value
        };
    }
    get fullName() {
        return `${this.nameObj.firstName.toUpperCase()} ${this.nameObj.lastName.toUpperCase()}`;
    }

    //* Task 4
    inputNumber = ''
    handleNumberChange(event) {
        this.inputNumber = event.target.value;
    }
    get evenOrOdd() {
        return this.inputNumber % 2 === 0 ? true: false
    }

    isChecked = false;
    handleCheckBox(event) {
        this.isChecked = event.target.checked;
    }

    //* Task 5
    contacts = [
        {
            Id: '003171931112854375',
            Name: 'Amy Taylor',
            Title: 'VP of Engineering'
        },
        {
            Id: '003192301009134555',
            Name: 'Michael Jones',
            Title: 'VP of Sales'
        },
        {
            Id: '003848991274589432',
            Name: 'Jennifer Wu',
            Title: 'CEO'
        }
    ];

    //* Task 6

}