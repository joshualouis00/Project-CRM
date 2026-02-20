import fakeDataProvider from 'ra-data-fakerest';
import generateData from 'data-generator-retail';

const data = generateData();

const dataProvider = fakeDataProvider(data, true);

export default dataProvider;