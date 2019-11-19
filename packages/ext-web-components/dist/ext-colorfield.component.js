import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_ux_colorpick_Field from '@sencha/ext-runtime-base/dist/./Ext/ux/colorpick/Field.js';
import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCColorfield =
/*#__PURE__*/
function (_Ext_ux_colorpick_Fie) {
  _inheritsLoose(EWCColorfield, _Ext_ux_colorpick_Fie);

  function EWCColorfield() {
    var _this;

    _this = _Ext_ux_colorpick_Fie.call(this, [], []) || this;
    _this.xtype = 'colorfield';
    return _this;
  }

  return EWCColorfield;
}(Ext_ux_colorpick_Field);

export { EWCColorfield as default };
window.customElements.define('ext-colorfield', HTMLParsedElement.withParsedCallback(EWCColorfield));