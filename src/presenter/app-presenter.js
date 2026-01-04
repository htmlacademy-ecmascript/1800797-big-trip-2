import { filtersElemenent, tripEventsContainerElement, tripEventElement } from '../elements.js';
import { render } from '../render.js';
import FilterView from '../view/filter.js';
import SortView from '../view/sort.js';
import CreateFormView from '../view/creation-form.js';
import WayPointView from '../view/waypoint.js';
import TripListView from '../view/trip-list.js';

export default class AppPresenter {
  filterView = new FilterView();
  sortView = new SortView();
  createFormView = new CreateFormView();
  tripListView = new TripListView();

  init() {
    // for (let i = 1; i <= 3; i++) {
    //   render(new FilterView(), filtersElemenent);
    // }
    render(this.filterView, filtersElemenent);
    render(this.sortView, tripEventsContainerElement);
    render(this.createFormView, this.tripListView.getElement());
    for (let i = 1; i <= 3; i++) {
      render(new WayPointView(), this.tripListView.getElement());
    }
    render(this.tripListView, tripEventsContainerElement);
  }
}
