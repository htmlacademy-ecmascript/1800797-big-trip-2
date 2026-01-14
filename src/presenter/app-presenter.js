import { filtersElemenent, tripEventsContainerElement, tripEventElement } from '../elements.js';
import { render } from '../render.js';
import FilterView from '../view/filter.js';
import SortView from '../view/sort.js';
import CreateFormView from '../view/creation-form.js';
import WayPointView from '../view/waypoint.js';
import TripListView from '../view/trip-list.js';

export default class AppPresenter {
  constructor(pointsModel, destinationsModel, offersModel) {
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  filterView = new FilterView();
  sortView = new SortView();
  createFormView = new CreateFormView();
  tripListView = new TripListView();

  init() {
    const points = this.pointsModel.getPoints();
    render(this.filterView, filtersElemenent);
    render(this.sortView, tripEventsContainerElement);
    render(this.createFormView, this.tripListView.getElement());
    // for (let i = 1; i <= 3; i++) {
    //   render(new WayPointView(), this.tripListView.getElement());
    // }
    points.forEach((point) => {
      const destination = this.destinationsModel.getDestinationById(point.destination);
      const offers = this.offersModel.getOffersForPoint(point.offers, point.type);
      render(new WayPointView(point, destination, offers), this.tripListView.getElement());
    });
    render(this.tripListView, tripEventsContainerElement);
  }
}
