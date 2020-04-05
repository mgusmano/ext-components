import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_fx_animation_Wipe from '../../../Ext/fx/animation/Wipe.js';

var Ext_fx_animation_WipeOut = /*#__PURE__*/function (_Ext_fx_animation_Wip) {
  _inheritsLoose(Ext_fx_animation_WipeOut, _Ext_fx_animation_Wip);

  var _super = _createSuper(Ext_fx_animation_WipeOut);

  Ext_fx_animation_WipeOut.PROPERTIES = function PROPERTIES() {
    return ['direction', 'easing', 'out', 'type'];
  };

  Ext_fx_animation_WipeOut.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_animation_WipeOut.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_WipeOut.PROPERTIES());
    return Ext_fx_animation_Wipe.getProperties(properties);
  };

  Ext_fx_animation_WipeOut.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_animation_WipeOut.EVENTS());
    return Ext_fx_animation_Wipe.getEvents(events);
  };

  _createClass(Ext_fx_animation_WipeOut, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_animation_Wip.observedAttributes;
      Ext_fx_animation_WipeOut.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_animation_WipeOut.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_animation_WipeOut(properties, events) {
    return _Ext_fx_animation_Wip.call(this, properties.concat(Ext_fx_animation_WipeOut.PROPERTIES()), events.concat(Ext_fx_animation_WipeOut.EVENTS())) || this;
  }

  var _proto = Ext_fx_animation_WipeOut.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_animation_Wip.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_animation_Wip.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_animation_WipeOut;
}(Ext_fx_animation_Wipe);

export { Ext_fx_animation_WipeOut as default };