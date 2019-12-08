import Ext_form_Number from './Ext/form/Number'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtNumberfieldComponent extends Ext_form_Number {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'numberfield'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-numberfield', ExtNumberfieldComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-numberfield', HTMLParsedElement.withParsedCallback(ExtNumberfieldComponent))