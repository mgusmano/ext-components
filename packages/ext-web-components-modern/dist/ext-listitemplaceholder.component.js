import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_dataview_ListItemPlaceholder from '@sencha/ext-runtime-base/dist/./Ext/dataview/ListItemPlaceholder.js';
import Ext_dataview_ListItemPlaceholder from './Ext/dataview/ListItemPlaceholder.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCListitemplaceholder =
/*#__PURE__*/
function (_Ext_dataview_ListIte) {
  _inheritsLoose(EWCListitemplaceholder, _Ext_dataview_ListIte);

  function EWCListitemplaceholder() {
    var _this;

    _this = _Ext_dataview_ListIte.call(this, [], []) || this;
    _this.xtype = 'listitemplaceholder';
    return _this;
  }

  return EWCListitemplaceholder;
}(Ext_dataview_ListItemPlaceholder);

export { EWCListitemplaceholder as default };
window.customElements.define('ext-listitemplaceholder', HTMLParsedElement.withParsedCallback(EWCListitemplaceholder));