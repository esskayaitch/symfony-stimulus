import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
  
  
  onChartConnect(event) {
    this.chart = event.detail.chart;
    
    setTimeout(() => {
      this.setNewData()
    }, 3000);
    
  }
  
  setNewData() {
    this.chart.data.datasets[0].data[3] = 30;
    this.chart.update();
  }
  
}
