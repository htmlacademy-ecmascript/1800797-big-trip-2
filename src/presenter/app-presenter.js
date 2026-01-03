import { filtersElemenent, sortElements, tripEvents } from '../elements.js';
import { render } from '../render.js';
import FilterView from '../view/filter.js';
import SortView from '../view/sort.js';
import CreateFormView from '../view/creation-form.js';
import WayPointView from '../view/waypoint.js';

export default class AppPresenter {
  filterView = new FilterView();
  sortView = new SortView();
  createFormView = new CreateFormView();



  init() {
    // for (let i = 1; i <= 3; i++) {
    //   render(new FilterView(), filtersElemenent);
    // }
    render(this.filterView, filtersElemenent);
    render(this.sortView, sortElements);
    render(this.createFormView, sortElements);
    for (let i = 1; i <= 3; i++) {
      render(new WayPointView(), sortElements);
    }
  }
}
