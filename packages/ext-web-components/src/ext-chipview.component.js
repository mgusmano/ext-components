import Ext_dataview_ChipView from './Ext/dataview/ChipView'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtChipviewComponent extends Ext_dataview_ChipView {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'chipview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-chipview', ExtChipviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-chipview', HTMLParsedElement.withParsedCallback(ExtChipviewComponent))