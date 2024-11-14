import {Controller} from '@hotwired/stimulus';
import FeaturedProduct from "../components/FeaturedProduct";
import React from "react";


export default class extends Controller {
  
  static values = {
    product: Object,
  }
  
  connect() {
    import('react-dom/client')
      .then((ReactDOM) => {
        ReactDOM.createRoot(this.element)
          .render(<FeaturedProduct product={this.productValue}/>)
      });
  }
}
