import Ext_pivot_cell_Cell_Component from '../../../Ext/pivot/cell/Cell';

export default class Ext_pivot_cell_Group_Component extends Ext_pivot_cell_Cell_Component {
//events
//configs

static XTYPE() {return 'pivotgridgroupcell'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_pivot_cell_Group_Component.METHODS(),
        Ext_pivot_cell_Group_Component.XTYPE(),
        Ext_pivot_cell_Group_Component.PROPERTIESOBJECT(),
        Ext_pivot_cell_Group_Component.EVENTS()
    )
    this.XTYPE = Ext_pivot_cell_Group_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_cell_Group_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_pivot_cell_Group_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_pivot_cell_Group_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-pivotgridgroupcell', Ext_pivot_cell_Group_Component);
  });
})();
