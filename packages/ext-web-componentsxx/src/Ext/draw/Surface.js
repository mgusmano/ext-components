import Ext_draw_SurfaceBase from '../../Ext/draw/SurfaceBase';

export default class Ext_draw_Surface extends Ext_draw_SurfaceBase {

    static PROPERTIES() { return [
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'background',
'bind',
'border',
'cls',
'constrainAlign',
'controller',
'defaultListenerScope',
'dirty',
'disabled',
'flex',
'flipRtlText',
'floated',
'focusCls',
'height',
'hidden',
'hideMode',
'id',
'instanceCls',
'itemId',
'items',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'listeners',
'margin',
'name',
'nameable',
'plugins',
'publishes',
'rect',
'reference',
'relative',
'renderTo',
'ripple',
'session',
'shadow',
'shareableName',
'shim',
'style',
'toFrontOnShow',
'touchAction',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'viewModel',
'width',
'x',
'y',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'surface'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'surface,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'surface,event'},
{name:'focusenter',parameters:'surface,event'},
{name:'focusleave',parameters:'surface,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'surface'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_draw_Surface.PROPERTIES());
        return Ext_draw_SurfaceBase.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_draw_Surface.EVENTS());
        return Ext_draw_SurfaceBase.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'surface'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_draw_Surface.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_draw_Surface.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_draw_Surface.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_draw_Surface.PROPERTIES()),
            events.concat(Ext_draw_Surface.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
