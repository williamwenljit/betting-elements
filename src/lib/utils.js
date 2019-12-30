import path from 'lodash/fp/path';
import keyBy from 'lodash/fp/keyBy';

export const getId = path('id');

export const keyById = keyBy(getId);
