import { LightningElement } from 'lwc';
import userId from '@salesforce/user/Id';

export default class ElDynamicLayoutOne extends LightningElement {
    objectApiName = 'User';
    recordId = userId;
    layoutType = 'Compact';
    columns = 1;
}