import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Base from '../../Ext/Base.js';

var Ext_dom_GarbageCollector = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_dom_GarbageCollector, _Ext_Base);

  var _super = _createSuper(Ext_dom_GarbageCollector);

  Ext_dom_GarbageCollector.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_dom_GarbageCollector.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dom_GarbageCollector.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dom_GarbageCollector.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_dom_GarbageCollector.getEvents = function getEvents(events) {
    events = events.concat(Ext_dom_GarbageCollector.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_dom_GarbageCollector, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_dom_GarbageCollector.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dom_GarbageCollector.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dom_GarbageCollector(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_dom_GarbageCollector.PROPERTIES()), events.concat(Ext_dom_GarbageCollector.EVENTS())) || this;
  }

  var _proto = Ext_dom_GarbageCollector.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dom_GarbageCollector;
}(Ext_Base);

export { Ext_dom_GarbageCollector as default };