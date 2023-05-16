import RestaurantSource from '../../data/restaurant-source';

const Daftar = {
  async render() {
    return `
    <h2>Daftar Rumah Makan</h2>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    console.log(restaurants);
  },
};

export default Daftar;
