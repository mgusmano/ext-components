import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_layout_component_Body from '../../../Ext/layout/component/Body.js';

var Ext_layout_component_FieldSet = /*#__PURE__*/function (_Ext_layout_component) {
  _inheritsLoose(Ext_layout_component_FieldSet, _Ext_layout_component);

  var _super = _createSuper(Ext_layout_component_FieldSet);

  Ext_layout_component_FieldSet.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy', 'setHeightInDom', 'setWidthInDom'];
  };

  Ext_layout_component_FieldSet.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_component_FieldSet.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_component_FieldSet.PROPERTIES());
    return Ext_layout_component_Body.getProperties(properties);
  };

  Ext_layout_component_FieldSet.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_component_FieldSet.EVENTS());
    return Ext_layout_component_Body.getEvents(events);
  };

  _createClass(Ext_layout_component_FieldSet, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_component.observedAttributes;
      Ext_layout_component_FieldSet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_component_FieldSet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_component_FieldSet(properties, events) {
    return _Ext_layout_component.call(this, properties.concat(Ext_layout_component_FieldSet.PROPERTIES()), events.concat(Ext_layout_component_FieldSet.EVENTS())) || this;
  }

  var _proto = Ext_layout_component_FieldSet.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_component_FieldSet;
}(Ext_layout_component_Body);

export { Ext_layout_component_FieldSet as default };