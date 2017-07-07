import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-highcharts',
  templateUrl: 'highcharts.html',
})
export class HighchartsPage {

  chartOptions: any
  bubblechart: any;
  users: any;
  userIds: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chartOptions = {
      chart: {
            type: 'bar'
        },
        title: {
            text: 'Horizontal Bar'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    }    
    this.bubblechart = {
      chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        spacingLeft: 5,
        zoomType: 'xy'
      },

      title: {
          text: 'Bubbles'
      },

      xAxis: {
          gridLineWidth: 1
      },

      yAxis: {
          startOnTick: false,
          endOnTick: false
      },

      series: [{
          name: 'Your Company',
          data: [45, 78, 68],
          marker: {
              fillColor: {
                  radialGradient: { cx: 0.9, cy: 0.3, r: 0.7 },
                  stops: [
                      [0, 'rgba(255,255,255,0.5)'],
                      [1, 'rgba(54, 162, 235, 0.2)']
                  ]
              }
          }
      }, 
      {
        name:'Other Companies',  
        data: [
            [42, 38, 20],
            [6, 18, 1],
            [1, 93, 55],
        ],
        marker: {
            fillColor: {
                radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                stops: [
                    [0, 'rgba(255,255,255,0.5)'],
                    [1,'rgba(54, 162, 235, 0.2)']
                ]
            }
        }
      }] 
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HighchartsPage');
  }

}
