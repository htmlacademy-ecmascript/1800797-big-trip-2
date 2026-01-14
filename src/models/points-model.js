
export default class PointsModel {
  constructor(pointsData) {
    this.points = [...pointsData];
  }

  getPoints() {
    return this.points;
  }
}
