import _createClass from "@babel/runtime/helpers/createClass.js";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
import Ext_field_trigger_Expand from '../../../Ext/field/trigger/Expand.js';

var Ext_field_trigger_Date =
/*#__PURE__*/
function (_Ext_field_trigger_Ex) {
  _inheritsLoose(Ext_field_trigger_Date, _Ext_field_trigger_Ex);

  Ext_field_trigger_Date.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'disabled', 'field', 'flex', 'floated', 'focusCls', 'focusOnTap', 'group', 'handler', 'height', 'hidden', 'hideMode', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'relative', 'renderTo', 'repeat', 'ripple', 'scope', 'session', 'shadow', 'shareableName', 'shim', 'side', 'style', 'toFrontOnShow', 'touchAction', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'x', 'y'];
  };

  Ext_field_trigger_Date.EVENTS = function EVENTS() {
    return [{
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforetofront',
      parameters: 'sender'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'sender'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_field_trigger_Date.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_field_trigger_Date.PROPERTIES());
    return Ext_field_trigger_Expand.getProperties(properties);
  };

  Ext_field_trigger_Date.getEvents = function getEvents(events) {
    events = events.concat(Ext_field_trigger_Date.EVENTS());
    return Ext_field_trigger_Expand.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'datetrigger'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_field_trigger_Date, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_trigger_Ex.observedAttributes; //for (var property in Ext_field_trigger_Date.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_field_trigger_Date.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_field_trigger_Date.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_trigger_Date(properties, events) {
    return _Ext_field_trigger_Ex.call(this, properties.concat(Ext_field_trigger_Date.PROPERTIES()), events.concat(Ext_field_trigger_Date.EVENTS())) || this;
  }

  var _proto = Ext_field_trigger_Date.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_trigger_Ex.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_trigger_Ex.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_trigger_Date;
}(Ext_field_trigger_Expand);

export { Ext_field_trigger_Date as default };