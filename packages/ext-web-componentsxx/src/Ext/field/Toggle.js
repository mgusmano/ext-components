import Ext_field_SingleSlider from '../../Ext/field/SingleSlider';

export default class Ext_field_Toggle extends Ext_field_SingleSlider {

    static PROPERTIES() { return [
'activeLabel',
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoFitErrors',
'axisLock',
'bind',
'bodyAlign',
'border',
'bottom',
'boxLabel',
'boxLabelAlign',
'bubbleDirty',
'centered',
'cls',
'constrainAlign',
'contentEl',
'controller',
'data',
'dataType',
'defaultListenerScope',
'dirty',
'disabled',
'displayed',
'docked',
'draggable',
'error',
'errorMessage',
'errorTarget',
'errorTip',
'errorTpl',
'flex',
'floated',
'focusCls',
'fullscreen',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'id',
'inactiveLabel',
'increment',
'inline',
'instanceCls',
'itemId',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'label',
'labelAlign',
'labelCls',
'labelMinWidth',
'labelTextAlign',
'labelWidth',
'labelWrap',
'left',
'listeners',
'liveUpdate',
'margin',
'maxHeight',
'maxValue',
'maxWidth',
'minHeight',
'minValue',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'padding',
'plugins',
'publishes',
'readOnly',
'record',
'reference',
'relative',
'renderTo',
'required',
'requiredMessage',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'sideError',
'slider',
'stateful',
'statefulDefaults',
'stateId',
'style',
'tabIndex',
'tipError',
'titleError',
'toFrontOnShow',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'underError',
'userCls',
'userSelectable',
'validateDisabled',
'validationMessage',
'validators',
'value',
'values',
'viewModel',
'weight',
'width',
'x',
'xtype',
'y',
'zIndex',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'added',parameters:'sender,container,index'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'togglefield'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'togglefield,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'change',parameters:'togglefield,newValue,oldValue'},
{name:'click',parameters:'e'},
{name:'destroy',parameters:''},
{name:'dirtychange',parameters:'togglefield,dirty'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drag',parameters:''},
{name:'dragchange',parameters:'me,sl,newValue,oldValue'},
{name:'dragend',parameters:''},
{name:'dragstart',parameters:''},
{name:'erased',parameters:'sender'},
{name:'errorchange',parameters:'togglefield,error'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'togglefield,event'},
{name:'focusenter',parameters:'togglefield,event'},
{name:'focusleave',parameters:'togglefield,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'keyup',parameters:'e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'mousedown',parameters:'e'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'paste',parameters:'e'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'togglefield'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_field_Toggle.PROPERTIES());
        return Ext_field_SingleSlider.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_field_Toggle.EVENTS());
        return Ext_field_SingleSlider.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'togglefield'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_field_Toggle.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_field_Toggle.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_field_Toggle.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_field_Toggle.PROPERTIES()),
            events.concat(Ext_field_Toggle.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
