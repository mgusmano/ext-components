import './WithRendererComponent.html';
import createData from './createData';

export default class WithRendererComponent {
    constructor() {
        this.menuCmpArray = [],
        this.store = Ext.create('Ext.data.Store', {
            fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
        });
        this.onRefreshClick();
    }

    cartesianReady = (event) => {
        const cartesianAxes = [{
            type: 'numeric',
            position: 'left',
            fields: ['g1'],
            minimum: 0
        }, {
            type: 'category',
            position: 'bottom',
            fields: 'name'
        }];
        const cartesianSeries = [{
            type: 'line',
            xField: 'name',
            yField: 'g1',
            smooth: true,
            style: {
                strokeStyle: 'powderblue',
                fillStyle: 'aliceblue',
                lineWidth: 4
            },
            marker: {
                type: 'circle',
                radius: 10,
                lineWidth: 2
            },
            renderer: this.onSeriesRender
        }];
        this.cartesianCmp = event.detail.cmp;
        this.cartesianCmp.setStore(this.store);
        this.cartesianCmp.setAxes(cartesianAxes);
        this.cartesianCmp.setSeries(cartesianSeries);
    }

    onMenuItemReady = (event) => {
        this.menuCmpArray.push(event.detail.cmp);
        event.detail.cmp.on('click', this.onThemeChange.bind(this));
    }

    onRefreshButtonReady = (event) => {
        this.refreshButtonCmp = event.detail.cmp;
        this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
    }

    onRefreshClick = () => {
        this.store.loadData(createData());
    }

    onThemeChange = (event) => {
        this.theme = event.config.text.toLowerCase();
        this.menuCmpArray.forEach((cmp, index) => {
            if (index == parseInt(event.config.itemId)) {
                cmp.setIconCls('x-font-icon md-icon-done');
                return;
            }
            cmp.setIconCls('');
        });
        this.cartesianCmp.setTheme(event.config.text.toLowerCase());
    }
}
