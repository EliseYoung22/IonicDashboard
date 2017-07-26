import { Component, ViewChild } from '@angular/core';
import { AlertController,
         IonicPage,
         NavController,
         NavParams,
         Platform } from 'ionic-angular';

import { Chart } from 'chart.js';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   @ViewChild('pieChart') pieChart;
   @ViewChild('barChart') barChart;
   @ViewChild('lineChart') lineChart;


   public technologies              : any = {
   										        "technologies" : [
                                                  {
                                                     'technology' : 'Mobile: Ionic/Angular',
                                                     'time'       : 50,
                                                     'color'      : 'rgba(206, 61, 95, 0.5)',
                                                     'hover'      : 'rgba(199, 108, 129, 0.5)'
                                                  },
                                                  {
                                                     'technology' : 'Front-end: Sass/CSS',
                                                     'time'       : 15,
                                                     'color'      : 'rgba(83, 131, 185, 0.5)',
                                                     'hover'      : 'rgba(122, 160, 202, 0.5)'
                                                  },
                                                  {
                                                     'technology' : 'Server: PHP/MySQL',
                                                     'time'       : 10,
                                                     'color'      : 'rgba(198, 147, 194, 0.5)',
                                                     'hover'      : 'rgba(200, 166, 197, 0.5)'
                                                  },
                                                  {
                                                     'technology' : 'Code Documentation',
                                                     'time'       : 5,
                                                     'color'      : 'rgba(54, 116, 152, 0.5)',
                                                     'hover'      : 'rgba(103, 139, 160, 0.5)'
                                                  },
                                                  {
                                                     'technology' : 'Knowledge: Blogging',
                                                     'time'       : 10,
                                                     'color'      : 'rgba(152, 54, 145, 0.5)',
                                                     'hover'      : 'rgba(152, 89, 149, 0.5)',
                                                  },
                                                  {
                                                     'technology' : 'SEO/Online Marketing',
                                                     'time'       : 10,
                                                     'color'      : 'rgba(192, 192, 192, 0.5)',
                                                     'hover'      : 'rgba(220, 220, 220, 0.5)'
                                                  }
   										       ]
   										    };
   public pieChartEl                : any;
   public barChartEl                : any;
   public lineChartEl               : any;
   public chartLabels               : any    = [];
   public chartValues               : any    = [];
   public chartColours              : any    = [];
   public chartHoverColours         : any    = [];
   chart: any;
   data: any;
   chartLoading: any;
   constructor( public navCtrl      : NavController,
                public navParams    : NavParams)
   { }




   ionViewDidLoad()
   {
      this.defineChartData();
      this.createPieChart();
      this.createBarChart();
      this.createLineChart();
   }

   defineChartData() {
      let k : any;

      for(k in this.technologies.technologies)
      {
         var tech  =      this.technologies.technologies[k];

         this.chartLabels.push(tech.technology);
         this.chartValues.push(tech.time);
         this.chartColours.push(tech.color);
         this.chartHoverColours.push(tech.hover);
      }
  }

  drawBarValues(){
  // render the value of the chart above the bar
    var ctx = this.chart.ctx;
    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
    ctx.fillStyle = this.chart.config.options.defaultFontColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    this.data.datasets.forEach(function (dataset) {
      for (var i = 0; i < dataset.data.length; i++) {
        if(dataset.hidden === true && dataset._meta[Object.keys(dataset._meta)[0]].hidden !== false){ continue; }
        var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
        if(dataset.data[i] !== null){
          ctx.fillText(dataset.data[i], model.x - 1, model.y - 5);
        }
      }
    });
  }

   createPieChart() {

      this.pieChartEl 			= new Chart(this.pieChart.nativeElement,
      {
         type: 'pie',
         data: {
             labels: this.chartLabels,
             datasets: [{
                 label                 : 'Daily Technology usage',
                 data                  : this.chartValues,
                 duration              : 2000,
                 easing                : 'easeInQuart',
                 backgroundColor       : this.chartColours,
                 hoverBackgroundColor  : this.chartHoverColours
             }]
         },
         options : {
            maintainAspectRatio: false,
            layout: {
               padding: {
                  left     : 50,
                  right    : 0,
                  top      : 0,
                  bottom   : 0
               }
            },
            animation: {
               duration : 5000
            }
         }
      });



      this.chartLoading = this.pieChartEl.generateLegend();
  }

   createBarChart() {
      this.barChartEl 			= new Chart(this.barChart.nativeElement,
      {
         type: 'bar',
         data: {
            labels: this.chartLabels,
             datasets: [{
                 label                 : 'Daily Technology usage',
                 data                  : this.chartValues,
                 duration              : 2000,
                 easing                : 'easeInQuart',
                 backgroundColor       : this.chartColours,
                 hoverBackgroundColor  : this.chartHoverColours
             }]
         },
         options : {
            maintainAspectRatio: false,
            legend         : {
               display     : true,
               boxWidth    : 80,
               fontSize    : 15,
               padding     : 0
            },
            scales: {
                yAxes: [{
                    ticks: {
                       beginAtZero:true,
                       stepSize: 5,
                       max : 100
                    }
                }],
                xAxes: [{
                    ticks: {
                       autoSkip: false
                    }
                }]
            }
         }
      });
  }

   createLineChart() {
      this.lineChartEl 			= new Chart(this.lineChart.nativeElement,
      {
         type: 'line',
         data: {
            labels: this.chartLabels,
             datasets: [{
                 label                 : 'Daily Technology usage',
                 data                  : this.chartValues,
                 easing                : 'easeInQuart',
                 backgroundColor       : this.chartColours,
                 hoverBackgroundColor  : this.chartHoverColours,
 				 fill 				   : false
             }]
         },
         options : {
            maintainAspectRatio: false,
            animation: {
              onProgress: this.drawBarValues,
              onComplete: this.drawBarValues
            },
            hover: { animationDuration: 0 },
            legend         : {
               display     : true,
               boxWidth    : 80,
               fontSize    : 15,
               padding     : 0
            },
            scales: {
                yAxes: [{
                    ticks: {
                       beginAtZero:true,
                       stepSize: 5,
                       max : 100
                    }
                }],
                xAxes: [{
                    ticks: {
                       autoSkip: false
                    }
                }]
            }
         }
      });
  }
}