import fakeDataProvider from 'ra-data-fakerest';
import generateData from 'data-generator-retail';
import type { DataProvider } from 'ra-core';

const data = generateData();

const dataProvider: DataProvider = fakeDataProvider(data, true);
//                                  👆 langsung boolean

export default dataProvider;