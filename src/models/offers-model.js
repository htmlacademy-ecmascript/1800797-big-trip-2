export default class OffersModel {
  constructor(offersData) {
    this.offers = [...offersData];
  }

  getOffersByType(type) {
    return this.offers.find((item) => item.type === type).offers;
  }

  getOffersByTypeId(type, id) {
    return this.offers
      .find((item) => item.type === type)
      .offers
      .find((item) => item.id === id);
  }

  getOffersForPoint(ids, type) {
    return ids.map((item) => this.getOffersByTypeId(type, item));
  }
}
