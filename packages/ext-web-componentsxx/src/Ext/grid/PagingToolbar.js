import Ext_Toolbar from '../../Ext/Toolbar';

export default class Ext_grid_PagingToolbar extends Ext_Toolbar {

    static PROPERTIES() { return [
'activeChildTabIndex',
'activeItem',
'alignSelf',
'allowFocusingDisabledChildren',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoDestroy',
'autoSize',
'axisLock',
'bind',
'bodyCls',
'border',
'bottom',
'cardSwitchAnimation',
'centered',
'cls',
'constrainAlign',
'contentEl',
'control',
'controller',
'data',
'defaultButtonUI',
'defaultFocus',
'defaultListenerScope',
'defaults',
'defaultType',
'disabled',
'displayed',
'docked',
'draggable',
'flex',
'floated',
'focusableContainer',
'focusCls',
'fullscreen',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'id',
'inactiveChildTabIndex',
'innerCls',
'instanceCls',
'itemId',
'items',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'layout',
'left',
'listeners',
'manageBorders',
'margin',
'masked',
'maxHeight',
'maxWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'nameHolder',
'nextButton',
'padding',
'plugins',
'prevButton',
'publishes',
'record',
'reference',
'referenceHolder',
'relative',
'renderTo',
'resetFocusPosition',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'sliderField',
'stateful',
'statefulDefaults',
'stateId',
'style',
'summaryComponent',
'tabIndex',
'title',
'toFrontOnShow',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'userSelectable',
'viewModel',
'weight',
'weighted',
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
{name:'activate',parameters:'newActiveItem,pagingtoolbar,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'pagingtoolbar,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
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
{name:'beforetofront',parameters:'pagingtoolbar'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'pagingtoolbar,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'deactivate',parameters:'oldActiveItem,pagingtoolbar,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'pagingtoolbar,event'},
{name:'focusenter',parameters:'pagingtoolbar,event'},
{name:'focusleave',parameters:'pagingtoolbar,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'pagingtoolbar,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'pagingtoolbar,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'pagingtoolbar,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'pagingtoolbar'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_PagingToolbar.PROPERTIES());
        return Ext_Toolbar.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_PagingToolbar.EVENTS());
        return Ext_Toolbar.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'pagingtoolbar'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_grid_PagingToolbar.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_grid_PagingToolbar.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_grid_PagingToolbar.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_grid_PagingToolbar.PROPERTIES()),
            events.concat(Ext_grid_PagingToolbar.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
