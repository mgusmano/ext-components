import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_Polar from '../../../Ext/chart/series/Polar.js';

var Ext_chart_series_Gauge = /*#__PURE__*/function (_Ext_chart_series_Pol) {
  _inheritsLoose(Ext_chart_series_Gauge, _Ext_chart_series_Pol);

  Ext_chart_series_Gauge.PROPERTIES = function PROPERTIES() {
    return ['angleField', 'animation', 'background', 'bind', 'center', 'chart', 'colors', 'controller', 'defaultListenerScope', 'donut', 'hidden', 'highlight', 'highlightCfg', 'itemInstancing', 'label', 'labelOverflowPadding', 'listeners', 'marker', 'markerSubStyle', 'maximum', 'minimum', 'nameable', 'needle', 'needleLength', 'needleWidth', 'offsetX', 'offsetY', 'overlaySurface', 'publishes', 'radius', 'radiusField', 'reference', 'renderer', 'rotation', 'sectors', 'session', 'shareableName', 'showInLegend', 'showMarkers', 'store', 'style', 'subStyle', 'surface', 'theme', 'themeStyle', 'title', 'tooltip', 'totalAngle', 'triggerAfterDraw', 'twoWayBindable', 'useDarkerStrokeColor', 'value', 'viewModel', 'wholeDisk', 'xField', 'yField'];
  };

  Ext_chart_series_Gauge.EVENTS = function EVENTS() {
    return [{
      name: 'chartattached',
      parameters: 'chart,series'
    }, {
      name: 'chartdetached',
      parameters: 'chart,series'
    }, {
      name: 'itemclick',
      parameters: 'series,item,event'
    }, {
      name: 'itemdblclick',
      parameters: 'series,item,event'
    }, {
      name: 'itemmousedown',
      parameters: 'series,item,event'
    }, {
      name: 'itemmousemove',
      parameters: 'series,item,event'
    }, {
      name: 'itemmouseout',
      parameters: 'series,item,event'
    }, {
      name: 'itemmouseover',
      parameters: 'series,item,event'
    }, {
      name: 'itemmouseup',
      parameters: 'series,item,event'
    }, {
      name: 'itemtap',
      parameters: 'series,item,event'
    }, {
      name: 'storechange',
      parameters: 'series,newStore,oldStore'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_series_Gauge.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_Gauge.PROPERTIES());
    return Ext_chart_series_Polar.getProperties(properties);
  };

  Ext_chart_series_Gauge.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_Gauge.EVENTS());
    return Ext_chart_series_Polar.getEvents(events);
  };

  _createClass(Ext_chart_series_Gauge, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_Pol.observedAttributes;
      Ext_chart_series_Gauge.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_Gauge.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_Gauge(properties, events) {
    return _Ext_chart_series_Pol.call(this, properties.concat(Ext_chart_series_Gauge.PROPERTIES()), events.concat(Ext_chart_series_Gauge.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_Gauge.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_Pol.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_Pol.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_Gauge;
}(Ext_chart_series_Polar);

export { Ext_chart_series_Gauge as default };