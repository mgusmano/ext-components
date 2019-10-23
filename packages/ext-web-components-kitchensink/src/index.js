import './ewc_new.js';
// import '@sencha/ext-web-components-all';
import '@sencha/ext-web-components-all/src/ext-router.component.js';

import getMenu from './menu';
import { getRoutes } from '@sencha/ext-web-components-all/src/ext-router.component.js';
import MainComponent from './view/main/MainComponent.js';

Ext.require([
    'Ext.webcomponents.RendererCell'
]);

import './Data.js';
import * as d3 from 'd3';
import * as FroalaEditor from 'froala-editor/js/froala_editor.pkgd.min.js';

function init() {
    window.d3 = d3;
    window.FroalaEditor = FroalaEditor;
    window.menu = getMenu();
    window.routes = getRoutes(window.menu);
    window.main = new MainComponent();
    document.body.innerHTML = window._code['main']['MainComponent.html'];
}

init();