import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chart } from 'chart.js';

import { GithubserviceProvider } from '../../providers/githubservice/githubservice'

@IonicPage()
@Component({
  selector: 'page-chartjs',
  templateUrl: 'chartjs.html',
})

export class ChartjsPage {
  users: any;
  userIds: any;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  polarAreaChart: any;
  radarChart: any;
  halfdoughnutChart: any;

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas')lineCanvas;
  @ViewChild('polarAreaCanvas')polarAreaCanvas;
  @ViewChild('radarCanvas')radarCanvas;
  @ViewChild('halfdoughnutCanvas')halfdoughnutCanvas;

  getUsers() {
    this.githubServiceProvider.getUsers()
    .then(users => {
    this.users = users;
    let userIds = [];
    for (var i = 0; i < 3; i++) {
        userIds.push(users[6].id);
    }
    console.log(userIds);        
    console.log(this.users);
    this.barChart.data.datasets[0].data = userIds;
    this.doughnutChart.data.datasets[0].data = userIds;
    });
  }
  
  constructor(private githubServiceProvider: GithubserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
     this.getUsers();
  }

  ionViewDidLoad() {
    this.barChart = this.getBarChart();

    this.doughnutChart = this.getDoughnutChart();

    this.lineChart = this.getLineChart();

    this.polarAreaChart = this.getPolarChart();

    this.radarChart = this.getRadarChart();
  }

  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      type: chartType,
      data: data,
      options: options
    });
  }

  getBarChart(){
    let data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
        label: '# of Daily Step Goals Achieved',
        data: this.userIds,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    let options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
    return this.getChart(this.barCanvas.nativeElement, "bar", data, options);
  }

  getDoughnutChart(){
    let data = {
    labels: ["Discover", "Share", "Act"],
        datasets: [{
            label: '%',
            data: [89, 44, 67],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)'
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    }
    return this.getChart(this.doughnutCanvas.nativeElement, "doughnut", data);
  }

  getLineChart(){
    let data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Personal Growth",
                fill: false,
                lineTension: 0.3,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [45, 57, 60, 65, 62, 68, 70],
                spanGaps: false,
            },
            {
                label: "Average Others Growth",
                fill: false,
                lineTension: 0.3,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "#FF6384",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#FF6384",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#FF6384",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [33, 78, 48, 64, 54, 71, 73],
                spanGaps: false,
            }
        ],
    }
    return this.getChart(this.lineCanvas.nativeElement, "line", data);
  }

  getPolarChart(){
    let data = {
        labels: ["Discover", "Share", "Act"],
        datasets: [{
            label:"others",
            data: [45, 77, 89],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',

                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#FF6384",
                "#FF6384",
                // "#36A2EB",
                // "#FFCE56",
                // "#FF6384",
                // "#36A2EB",
                // "#FFCE56"
            ]
        },
        {
            label: 'You',
            data: [20, 55, 81],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            hoverBackgroundColor: [
                // "#FF6384",
                // "#36A2EB",
                // "#FFCE56",
                // "#FF6384",
                "#36A2EB",
                "#36A2EB",
                "#36A2EB",
                // "#FF9B00"
            ]
        }],     
    }
    return this.getChart(this.polarAreaCanvas.nativeElement, "polarArea", data);
  }

  getRadarChart(){
    let data = {
        labels: ["Discover", "Share", "Act"],
        datasets: [{
            label:'Others',
            lineTension: 0.3,
            data: [ 38, 55, 91],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(255, 99, 132, 0.4)',
                'rgba(255, 99, 132, 0.4)',    
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#FF6384",
                "#FF6384",
            ]
        },
        {
            label: 'You',
            lineTension: 0.3,
            data: [30, 67, 89],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            hoverBackgroundColor: [
                "#36A2EB",
                "#36A2EB",
                "#36A2EB",           
            ]
        }], 
    },
    options: {
        legend: {
            labels: {
                fontSize: 20
            }
        },
    }
    return this.getChart(this.radarCanvas.nativeElement, "radar", data, options);
  }

////////////////UPDATING CHART WITH NEW DATA/////////////

//   addData(chart, label, data){
//       chart.data.labels.push(label);
//       chart.data.datasets.forEach((dataset) => {
//           dataset.data.push(data);
//       })
//       chart.update();
//   }

// to potentially update labels, add this to addData function lineChart.config.data.label = newLabels
  
//   removeData(chart){
//       chart.data.labels.pop();
//       chart.data.datasets.forEach((dataset) => {
//           dataset.data.pop();
//       })
//       chart.update();
//   }
}
