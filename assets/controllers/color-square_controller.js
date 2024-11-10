import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
  
  static targets = ['colorSquare', 'select']
  static values = {
    colorId: Number
  }
  
  connect() {
    this.selectTarget.classList.add('d-none');
  }
  
  // Set select value in HTML to ID of the color clicked
  selectColor(event) {
    const clickedColor = event.currentTarget.dataset.colorId;
    this.colorIdValue = clickedColor == this.colorIdValue ? null : clickedColor;
  }
  
  // Callback function when color changes
  // - special Stimulus Bundle method name...
  colorIdValueChanged() {
    this.selectTarget.value = this.colorIdValue;
    
    this.colorSquareTargets.forEach((element) => {
      if (element.dataset.colorId == this.colorIdValue) {
        element.classList.add('selected');
      } else {
        element.classList.remove('selected');
      }
    });
  }
}
