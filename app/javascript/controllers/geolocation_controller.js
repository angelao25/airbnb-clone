import { Controller } from "@hotwired/stimulus"
import { getDistance, convertDistance } from "geolib"

// Connects to data-controller="geolocation"
export default class extends Controller {
  static targets = ["property"];
  connect() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.element.dataset.latitude = position.coords.latitude;
      this.element.dataset.longitude = position.coords.longitude;

      console.log("This is the current latitude of your location: ", position.coords.latitude);
      console.log("This is the current longitude of your location: ", position.coords.longitude);

      this.propertyTargets.forEach((propertyTarget) => {
        let distanceFrom = getDistance(
          { latitude: position.coords.latitude, longitude: position.coords.longitude },
          { latitude: propertyTarget.dataset.latitude, longitude: propertyTarget.dataset.longitude },
        );

        propertyTarget.querySelector('[data-distance-away]').innerHTML = `${Math.round(convertDistance(distanceFrom, 'km')) } kilometers away`;
      });
    });
  }
}
