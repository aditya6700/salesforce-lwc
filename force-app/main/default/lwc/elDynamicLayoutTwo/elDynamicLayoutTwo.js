import { LightningElement } from 'lwc';
import userId from '@salesforce/user/Id';

export default class ElDynamicLayoutTwo extends LightningElement {
    objectApiName = 'User';
    recordId = userId;
    layoutType = 'Full';
    columns = 2;
}