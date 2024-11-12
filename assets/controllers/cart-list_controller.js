import {Controller} from '@hotwired/stimulus'

export default class extends Controller {
  removeItem(event) {
    console.log(event.currentTarget);
    
  }
  
}
