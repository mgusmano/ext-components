//import Ext_grid_HeaderContainer from '@sencha/ext-runtime-base/dist/./Ext/grid/HeaderContainer.js';
import Ext_grid_HeaderContainer from './Ext/grid/HeaderContainer.js';
import ElementParser from './ElementParser.js';

export default class EWCHeadercontainer extends Ext_grid_HeaderContainer {
    constructor() {
        super ([], []);
        this.xtype = 'headercontainer';
    }

}
window.customElements.define('ext-headercontainer', ElementParser.withParsedCallback(EWCHeadercontainer));
