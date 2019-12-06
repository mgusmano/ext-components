import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_sparkline_Box from '@sencha/ext-runtime-base/dist/./Ext/sparkline/Box.js';
import Ext_sparkline_Box from './Ext/sparkline/Box.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSparklinebox =
/*#__PURE__*/
function (_Ext_sparkline_Box) {
  _inheritsLoose(EWCSparklinebox, _Ext_sparkline_Box);

  function EWCSparklinebox() {
    var _this;

    _this = _Ext_sparkline_Box.call(this, [], []) || this;
    _this.xtype = 'sparklinebox';
    return _this;
  }

  return EWCSparklinebox;
}(Ext_sparkline_Box);

export { EWCSparklinebox as default };
window.customElements.define('ext-sparklinebox', HTMLParsedElement.withParsedCallback(EWCSparklinebox));