import Ext_sparkline_Base from './Ext/sparkline/Base'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSparklineComponent extends Ext_sparkline_Base {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'sparkline'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-sparkline', ExtSparklineComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-sparkline', HTMLParsedElement.withParsedCallback(ExtSparklineComponent))
