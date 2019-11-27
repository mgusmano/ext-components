import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_calendar_panel_Week from '@sencha/ext-runtime-base/dist/./Ext/calendar/panel/Week.js';
import Ext_calendar_panel_Week from './Ext/calendar/panel/Week.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_week =
/*#__PURE__*/
function (_Ext_calendar_panel_W) {
  _inheritsLoose(EWCCalendar_week, _Ext_calendar_panel_W);

  function EWCCalendar_week() {
    var _this;

    _this = _Ext_calendar_panel_W.call(this, [], []) || this;
    _this.xtype = 'calendar-week';
    return _this;
  }

  return EWCCalendar_week;
}(Ext_calendar_panel_Week);

export { EWCCalendar_week as default };
window.customElements.define('ext-calendar-week', HTMLParsedElement.withParsedCallback(EWCCalendar_week));