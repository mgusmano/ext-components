import Ext_pivot_cell_Cell from '../../../Ext/pivot/cell/Cell';

export default class Ext_pivot_cell_Group extends Ext_pivot_cell_Cell {

    static PROPERTIES() { return [
'align',
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'bind',
'bodyCls',
'bodyStyle',
'border',
'cellCls',
'cls',
'column',
'constrainAlign',
'controller',
'defaultListenerScope',
'defaultToolWeights',
'disabled',
'encodeHtml',
'flex',
'floated',
'focusCls',
'formatter',
'height',
'hidden',
'hideMode',
'id',
'instanceCls',
'itemId',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'listeners',
'margin',
'name',
'nameable',
'plugins',
'publishes',
'rawValue',
'record',
'reference',
'relative',
'renderer',
'renderTo',
'ripple',
'scope',
'selectable',
'session',
'shadow',
'shareableName',
'shim',
'style',
'toFrontOnShow',
'toolDefaults',
'tools',
'touchAction',
'tpl',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'value',
'viewModel',
'width',
'x',
'y',
'zeroValue',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'pivotgridgroupcell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'pivotgridgroupcell,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'pivotgridgroupcell,event'},
{name:'focusenter',parameters:'pivotgridgroupcell,event'},
{name:'focusleave',parameters:'pivotgridgroupcell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'pivotgridgroupcell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_pivot_cell_Group.PROPERTIES());
        return Ext_pivot_cell_Cell.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_pivot_cell_Group.EVENTS());
        return Ext_pivot_cell_Cell.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'pivotgridgroupcell'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_pivot_cell_Group.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_pivot_cell_Group.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_pivot_cell_Group.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_pivot_cell_Group.PROPERTIES()),
            events.concat(Ext_pivot_cell_Group.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
