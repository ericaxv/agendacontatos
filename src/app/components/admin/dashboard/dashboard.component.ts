import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  grafico: Chart = new Chart();
  tipo: string = 'bar';

  constructor(
    private dashboardService: DashboardService,
    private spinnerService: NgxSpinnerService
  ){}

  ngOnInit(): void {
    this.spinnerService.show();
    this.dashboardService.get().subscribe({
      next: (data) => {
        var dados = [];
        var nomes = [];

        for(var i=0; i < data.length; i++){
          dados.push([data[i].name, data[i].data]);
          nomes.push(data[i].name)
        }

        this.grafico = new Chart({
          chart: { type: this.tipo },
          title: { text: 'Quantidade de contatos cadastrados por datas.' },
          subtitle: { text: 'Treinamento Angular - COTI Informática' },
          series: [{
            data: dados,
            type: undefined as any
          }],  
          xAxis: {
            categories: nomes
          },
          legend: { enabled: false },
          credits: { enabled: false }
          });

      },
      error: (e) => {
        console.log(e);

      }
    }).add(() => {
      this.spinnerService.hide();
    })

  }

}
