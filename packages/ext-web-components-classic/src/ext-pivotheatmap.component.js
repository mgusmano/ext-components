//import Ext_pivot_d3_HeatMap from '@sencha/ext-runtime-base/dist/./Ext/pivot/d3/HeatMap.js';
import Ext_pivot_d3_HeatMap from './Ext/pivot/d3/HeatMap.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotheatmap extends Ext_pivot_d3_HeatMap {
    constructor() {
        super ([], []);
        this.xtype = 'pivotheatmap';
    }

}
window.customElements.define('ext-pivotheatmap', ElementParser.withParsedCallback(EWCPivotheatmap));
