import Category from '../categories.js';
import mockAxios from "axios";
import {
  handleSelectionCases,
  getElementToRequestCases,
  getMultipleBreedsCase,
  getAllBreedsCases,
  parseCase
} from '../__mocks__';

const category = new Category();

describe('Model Category', () => {

  test('TEST getAllBreeds method success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(getAllBreedsCases.successResponse)
    );
    const result = await category.getAllBreeds();
    expect(result).toEqual(getAllBreedsCases.successRequest);
  });

  test('TEST getAllBreeds method error', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(getAllBreedsCases.errorResponse)
    );
    const response = await category.getAllBreeds();
    expect(response.message).toBe(getAllBreedsCases.errorRequest);
  });

  test('TEST getMultipleBreeds method', async () => {
    mockAxios.get.mockImplementation(() =>
      getMultipleBreedsCase.response
    );

    const response = await category.getMultipleBreeds(getMultipleBreedsCase.request)

    expect(response.length).toBe(2);
    expect(response).toEqual(getMultipleBreedsCase.result)
  });

  test('TEST parse', async () => {
    const resultObj = Object.keys(parseCase).map((name, i) => ({
      name: name,
      selected: false,
      subCategory: parseCase[name].length > 0 ? parseCase[name].map(subcat => ({
        name: subcat,
        selected: false
      })) : []
    }));

    const dataParsed = Category.parse(parseCase);
    expect(dataParsed).toEqual(resultObj);
  });

  test('TEST handleSelection', async () => {
    handleSelectionCases.forEach(caseToTest => {
      const resultList = Category.handleSelection(caseToTest.nameToChange, caseToTest.valueToChange, caseToTest.initValue);
      expect(resultList).toEqual(caseToTest.newValue);
    });
  });

  test('TEST getElementToRequest', async () => {
    const resultList = Category.getElementToRequest(getElementToRequestCases.input);
    expect(resultList).toEqual(getElementToRequestCases.output);
  });

})