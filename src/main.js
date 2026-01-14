import { destinations } from './mock/destination.js';
import { offers } from './mock/offers.js';
import { points } from './mock/points.js';
import DestinationsModel from './models/destination-model.js';
import OffersModel from './models/offers-model.js';
import PointsModel from './models/points-model.js';
import AppPresenter from './presenter/app-presenter.js';

const pointsModel = new PointsModel(points);
const destinationsModel = new DestinationsModel(destinations);
const offersModel = new OffersModel(offers);
const app = new AppPresenter(pointsModel, destinationsModel, offersModel);
app.init();
