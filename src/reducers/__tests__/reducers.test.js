import {
  globalReducer
} from '../index';
import actions from '../../actions';

describe('Gallery Component', () => {

  test('TEST reducer type SET_COLUMN', () => {
    const result = globalReducer({
      column: 3,
      someProperty: 'property'
    }, {
      type: actions.SET_COLUMN,
      value: 3
    });

    expect(result).toEqual({
      column: 3,
      someProperty: 'property'
    });
  });

  test('TEST reducer type SET_BREED_LIST', () => {
    const result = globalReducer({
      breedsList: [],
      someProperty: 'property'
    }, {
      type: actions.SET_BREED_LIST,
      value: ['value1', 'value2']
    });

    expect(result).toEqual({
      breedsList: ['value1', 'value2'],
      someProperty: 'property'
    });
  });

  test('TEST reducer type SET_GALLERY_LIST', () => {
    const result = globalReducer({
      pictureList: [],
      someProperty: 'property'
    }, {
      type: actions.SET_GALLERY_LIST,
      value: ['value1', 'value2']
    });

    expect(result).toEqual({
      pictureList: ['value1', 'value2'],
      someProperty: 'property'
    });
  });

  test('TEST reducer type default', () => {
    const result = globalReducer({
      pictureList: [],
      someProperty: 'property'
    }, {
      type: 'actions.SET_GALLERY_LIST',
    });

    expect(result).toEqual({
      pictureList: [],
      someProperty: 'property'
    });
  });

});