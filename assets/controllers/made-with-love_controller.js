import {Controller} from '@hotwired/stimulus';
import MadeWithLove from "../components/MadeWithLove";
import React from "react";


export default class extends Controller {
  connect() {
    
    import('react-dom/client')
      .then((ReactDOM) => {
        ReactDOM.createRoot(this.element)
          .render(<MadeWithLove/>)
      });
    
  }
}
