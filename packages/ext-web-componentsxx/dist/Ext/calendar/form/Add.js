import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_Form from '../../../Ext/calendar/form/Form';

var Ext_calendar_form_Add =
/*#__PURE__*/
function (_Ext_calendar_form_Fo) {
  _inheritsLoose(Ext_calendar_form_Add, _Ext_calendar_form_Fo);

  Ext_calendar_form_Add.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allDayField', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'api', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'baseParams', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'bubbleDirty', 'buttonAlign', 'buttons', 'buttonToolbar', 'calendarField', 'cancelButton', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultEndTime', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultStartTime', 'defaultToolWeights', 'defaultType', 'descriptionField', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'dropButton', 'enableSubmissionForm', 'enctype', 'endDateField', 'endTimeField', 'event', 'fieldDefaults', 'fieldSeparators', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'inputBorders', 'instanceCls', 'itemId', 'items', 'jsonSubmit', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'method', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'multipartDetection', 'name', 'nameable', 'nameHolder', 'padding', 'paramOrder', 'paramsAsHash', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'saveButton', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'standardButtons', 'standardSubmit', 'startDateField', 'startTimeField', 'stateful', 'statefulDefaults', 'stateId', 'style', 'submitOnAction', 'tabIndex', 'tbar', 'timeout', 'title', 'titleAlign', 'titleCollapse', 'titleField', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'trackResetOnLoad', 'translatable', 'twoWayBindable', 'ui', 'url', 'userCls', 'userSelectable', 'view', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_calendar_form_Add.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,calendar-form-add,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: 'calendar-form-add,item,index'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforeactiveItemchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecollapse',
      parameters: 'calendar-form-add'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeexpand',
      parameters: 'calendar-form-add'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforeresizedragstart',
      parameters: 'calendar-form-add,context'
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforesubmit',
      parameters: 'calendar-form-add,values,options,e'
    }, {
      name: 'beforetofront',
      parameters: 'calendar-form-add'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'calendar-form-add,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'cancel',
      parameters: 'calendar-form-add'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'collapse',
      parameters: 'calendar-form-add'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,calendar-form-add,newActiveItem'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'dirtychange',
      parameters: 'calendar-form-add,dirty'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'drawerhide',
      parameters: 'calendar-form-add'
    }, {
      name: 'drawershow',
      parameters: 'calendar-form-add'
    }, {
      name: 'drop',
      parameters: 'calendar-form-add'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'exception',
      parameters: 'calendar-form-add,result'
    }, {
      name: 'expand',
      parameters: 'calendar-form-add'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'calendar-form-add,event'
    }, {
      name: 'focusenter',
      parameters: 'calendar-form-add,event'
    }, {
      name: 'focusleave',
      parameters: 'calendar-form-add,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'move',
      parameters: 'calendar-form-add,item,toIndex,fromIndex'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'remove',
      parameters: 'calendar-form-add,item,index'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'calendar-form-add,item,rendered'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'resizedrag',
      parameters: 'calendar-form-add,context'
    }, {
      name: 'resizedragcancel',
      parameters: 'calendar-form-add,context'
    }, {
      name: 'resizedragend',
      parameters: 'calendar-form-add,context'
    }, {
      name: 'resizedragstart',
      parameters: 'calendar-form-add,context'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'save',
      parameters: 'calendar-form-add,context'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'submit',
      parameters: 'calendar-form-add,result,e'
    }, {
      name: 'tofront',
      parameters: 'calendar-form-add'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_calendar_form_Add.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_form_Add.PROPERTIES());
    return Ext_calendar_form_Form.getProperties(properties);
  };

  Ext_calendar_form_Add.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_form_Add.EVENTS());
    return Ext_calendar_form_Form.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'calendar-form-add'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_calendar_form_Add, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_form_Fo.observedAttributes; //for (var property in Ext_calendar_form_Add.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_calendar_form_Add.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_form_Add.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_form_Add(properties, events) {
    return _Ext_calendar_form_Fo.call(this, properties.concat(Ext_calendar_form_Add.PROPERTIES()), events.concat(Ext_calendar_form_Add.EVENTS())) || this;
  }

  var _proto = Ext_calendar_form_Add.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_form_Fo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_form_Fo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_form_Add;
}(Ext_calendar_form_Form);

export { Ext_calendar_form_Add as default };