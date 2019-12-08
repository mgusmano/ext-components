//import Ext_TabPanel from '@sencha/ext-runtime-base/dist/./Ext/TabPanel.js';
import Ext_TabPanel from './Ext/TabPanel.js';
import ElementParser from './ElementParser.js';

export default class EWCTabpanel extends Ext_TabPanel {
    constructor() {
        super ([], []);
        this.xtype = 'tabpanel';
    }

}
window.customElements.define('ext-tabpanel', ElementParser.withParsedCallback(EWCTabpanel));
