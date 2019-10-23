import Ext_tree_Tree from './Ext/tree/Tree'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTreeComponent extends Ext_tree_Tree {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tree'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tree', ExtTreeComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tree', HTMLParsedElement.withParsedCallback(ExtTreeComponent))