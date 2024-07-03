import { LightningElement } from 'lwc';

export default class DynamicLayoutComponent extends LightningElement {

    _buttonName;
    isCompact = true;
    dynamicLayoutInstance;

    get buttonName() {
        return this.isCompact ? 'View Full Layout' : 'View Compact Layout';
    }

    async connectedCallback() {
        const { default: ctor } = await import('c/elDynamicLayoutOne');
        this.dynamicLayoutInstance = ctor;
    }

    async toggleLayout() {
        this.isCompact = !this.isCompact;
        if (this.isCompact) {
            const {default: ctor} = await import('c/elDynamicLayoutOne');
            this.dynamicLayoutInstance = ctor;
        } else {
            const {default: ctor} = await import('c/elDynamicLayoutTwo');
            this.dynamicLayoutInstance = ctor;
        }
    }

}