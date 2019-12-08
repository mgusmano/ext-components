//import Ext_field_RadioGroup from '@sencha/ext-runtime-base/dist/./Ext/field/RadioGroup.js';
import Ext_field_RadioGroup from './Ext/field/RadioGroup.js';
import ElementParser from './ElementParser.js';

export default class EWCRadiogroup extends Ext_field_RadioGroup {
    constructor() {
        super ([], []);
        this.xtype = 'radiogroup';
    }

}
window.customElements.define('ext-radiogroup', ElementParser.withParsedCallback(EWCRadiogroup));
