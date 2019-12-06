import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_menu_CheckItem from '@sencha/ext-runtime-base/dist/./Ext/menu/CheckItem.js';
import Ext_menu_CheckItem from './Ext/menu/CheckItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCMenucheckitem =
/*#__PURE__*/
function (_Ext_menu_CheckItem) {
  _inheritsLoose(EWCMenucheckitem, _Ext_menu_CheckItem);

  function EWCMenucheckitem() {
    var _this;

    _this = _Ext_menu_CheckItem.call(this, [], []) || this;
    _this.xtype = 'menucheckitem';
    return _this;
  }

  return EWCMenucheckitem;
}(Ext_menu_CheckItem);

export { EWCMenucheckitem as default };
window.customElements.define('ext-menucheckitem', HTMLParsedElement.withParsedCallback(EWCMenucheckitem));