import { LightningElement } from 'lwc';

export default class DynamicComponentLoad extends LightningElement {
    dynamicInstance;

    // Use connectedCallback() on the dynamic component
    // to signal when it's attached to the DOM
    // connectedCallback() {
    //     import("c/helloWorld")
    //     .then(({ default: ctor }) => (this.dynamicInstance = ctor))
    //     .catch((err) => console.log("Error importing component"));
    // }

    async loadComponent() {
        const { default: ctor } = await import("c/helloWorld");
        this.dynamicInstance = ctor;
    }
}