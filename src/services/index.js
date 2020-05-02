import axios from 'axios';


class Services {
  constructor(url) {
    const base = url || '';

    this.request = axios.create({
      baseURL: `https://dog.ceo/api/${base}`
    });
  }

  getAllBreeds() {
    return this.handleResponse(this.request.get('breeds/list/all'));
  }

  getBreedsDetails(name) {
    return this.handleResponse(this.request.get(`breed/${name}/images`));
  }

  async handleResponse(_request) {
    try {
      const {
        data
      } = await _request;
      if (data.status !== "success") throw new Error(data.status);
      return data.message;
    } catch (error) {
      return error;
    }
  }



  parseBreeds(breeds, action = () => {}) {
    const keys = Object.keys(breeds);

    return keys.map(name => {

      return {
        name: name,
        active: false,
        subCategory: breeds[name].map(subcat => ({
          active: false,
          name: subcat,
          subCategory: []
        }))
      }

    });
  }
}

export default Services;