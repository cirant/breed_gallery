class Category {
  constructor(breeds = {}) {
    this.filterList = [];
    const keys = Object.keys(breeds);
    this.collection = keys.map(name => {
      return {
        name: name,
        selected: false,
        subCategory: breeds[name].map(subcat => ({
          selected: false,
          name: subcat
        }))
      }
    });
  }

  static parse(breeds) {
    const keys = Object.keys(breeds);
    return keys.map(name => {
      return {
        name: name,
        selected: false,
        subCategory: breeds[name].map(subcat => ({
          selected: false,
          name: subcat
        }))
      }
    });
  }

  static handleSelection(name, value, collection) {
    const [general, specific] = name.split(',');

    if (specific) {
      return collection.map((breed) => {
        if (breed.name === general) {
          const mainBreedStatus = breed.selected;
          return {
            ...breed,
            selected: !mainBreedStatus && value ? value : mainBreedStatus,
            subCategory: breed.subCategory.map(subcat => subcat.name === specific ? ({
              ...subcat,
              selected: value,
            }) : subcat)
          }
        }
        return breed;
      });
    }

    return collection.map((breed) => {
      if (breed.name === general) {
        return {
          ...breed,
          selected: value,
          subCategory: breed.subCategory.map(subcat => ({
            ...subcat,
            selected: value,
          }))
        }
      }
      return breed;
    });
  }

  static getElementToRequest(arr) {

    return arr.reduce((acc, breed) => {

      const subResult = breed.subCategory.reduce((subAcc, subcat) => {
        if (subcat.selected) subAcc.push(`${breed.name}/${subcat.name}`);
        return subAcc;
      }, []);

      const allSelected = subResult.length > 0 && subResult.length === breed.subCategory.length;

      if ((subResult.length === 0 && breed.selected) || allSelected) acc.push(breed.name)

      return allSelected ? acc : acc.concat(subResult);
    }, []);

  }
}

export default Category;