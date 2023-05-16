import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';

const Detail = {
  async render() {
    return `
    <h2>Detail Rumah Makan</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.detail(url.id);
    console.log(restaurants);
  },
};

export default Detail;
