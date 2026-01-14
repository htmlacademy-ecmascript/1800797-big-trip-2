export default class DestinationsModel {
  constructor(destinationData) {
    this.destinations = [...destinationData];
  }

  getDestinations() {
    return this.destinations;
  }

  getDestinationById(id) {
    return this.destinations.find((item) => item.id === id);
  }
}

