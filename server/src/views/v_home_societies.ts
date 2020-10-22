import HomeSociety from '../models/HomeSociety';
import ImagesView from './v_images';

export default {
  render(home_society: HomeSociety) {
    return {
      id: home_society.id,
      name: home_society.name,
      latitude: home_society.latitude,
      longitude: home_society.longitude,
      about: home_society.about,
      instructions: home_society.instructions,
      opening_hours: home_society.opening_hours,
      open_on_weekends: home_society.open_on_weekends,
      images: ImagesView.renderMany(home_society.images)
    };
  },

  renderMany(home_societies: HomeSociety[]) {
    return home_societies.map(home_society => this.render(home_society));
  },
};