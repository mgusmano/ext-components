import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_pivot_d3_Container from '@sencha/ext-runtime-base/dist/./Ext/pivot/d3/Container.js';
import Ext_pivot_d3_Container from './Ext/pivot/d3/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCPivotd3container =
/*#__PURE__*/
function (_Ext_pivot_d3_Contain) {
  _inheritsLoose(EWCPivotd3container, _Ext_pivot_d3_Contain);

  function EWCPivotd3container() {
    var _this;

    _this = _Ext_pivot_d3_Contain.call(this, [], []) || this;
    _this.xtype = 'pivotd3container';
    return _this;
  }

  return EWCPivotd3container;
}(Ext_pivot_d3_Container);

export { EWCPivotd3container as default };
window.customElements.define('ext-pivotd3container', HTMLParsedElement.withParsedCallback(EWCPivotd3container));