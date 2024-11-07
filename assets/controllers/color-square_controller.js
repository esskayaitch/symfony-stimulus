import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
  
  static targets = ['colorSquare', 'select'];
  selectedColorId = '';
  
  connect() {
    this.selectTarget.classList.add('d-none');
  }
  
  selectColor(event) {
    this.setSelectedColor(event.currentTarget.dataset.colorId);
  }
  
  setSelectedColor(clickedColorId) {
    if (clickedColorId === this.selectedColorId) {
      this.findSelectedColorSquare().classList.remove('selected');
      this.selectedColorId = '';
      // this.selectTarget = '';
      return;
    }
    
    this.selectedColorId = clickedColorId;
    
    this.colorSquareTargets.forEach((element) => {
      element.classList.remove('selected');
    });
    
    this.findSelectedColorSquare().classList.add('selected');
    this.selectTarget.value = this.selectedColorId;
  }
  
  /**
   * @returns {Element|null}
   */
  findSelectedColorSquare() {
    return this.colorSquareTargets.find((element) => element.dataset.colorId === this.selectedColorId);
  }
  
}
