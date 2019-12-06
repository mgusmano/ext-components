import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_column_Template from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Template.js';
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTemplatecolumn =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(EWCTemplatecolumn, _Ext_grid_column_Temp);

  function EWCTemplatecolumn() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'templatecolumn';
    return _this;
  }

  return EWCTemplatecolumn;
}(Ext_grid_column_Template);

export { EWCTemplatecolumn as default };
window.customElements.define('ext-templatecolumn', HTMLParsedElement.withParsedCallback(EWCTemplatecolumn));