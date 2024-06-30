import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="geolocation"
export default class extends Controller {
  connect() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      // console.log(pos);
      // var lat = pos.coords.latitude;
      // var lon = pos.coords.longitude; 
      this.element.dataset.latitude = position.coords.latitude;
      this.element.dataset.longitude = position.coords.longitude;
    });
  }
}
