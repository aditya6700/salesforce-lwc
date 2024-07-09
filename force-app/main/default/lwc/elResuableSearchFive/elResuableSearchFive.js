import { LightningElement } from 'lwc';
import getAccountByName from '@salesforce/apex/BasicResuableGetMethods.getAccountByName';
import NAME from '@salesforce/schema/Account.Name';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNTNUMBER from '@salesforce/schema/Account.AccountNumber';

const COLUMNS = [
    { label: 'Name', fieldName: NAME.fieldApiName, type: 'text' },
    { label: 'Industry', fieldName: INDUSTRY.fieldApiName, type: 'text' },
    { label: 'AccountNumber', fieldName: ACCOUNTNUMBER.fieldApiName, type: 'text' }
];

export default class ElResuableSearchFive extends LightningElement {
    searchParameters = {};
    accountData;
    columns = COLUMNS;
    error;

    c = console.log.bind(console);

    handleSearchFields(event) {
        const { name, value } = event.target;
        this.searchParameters = { ...this.searchParameters, [name]: value };
    }

    async searchAccount() {
        try {
            this.c('searching account...');
            this.accountData = await getAccountByName(this.searchParameters);
            this.c(this.accountData);
        } catch (error) {
            this.c(error);
            this.error = error;
            this.accountData = null;
        }
    }
}