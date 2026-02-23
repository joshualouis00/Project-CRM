import polyglotI18nProvider from 'ra-i18n-polyglot';
import {
    Admin,
    CustomRoutes,
    Resource,
} from 'react-admin';
import { Route } from 'react-router-dom';
import categories from './categories';
import { Dashboard } from './dashboard';
import englishMessages from './i18n/en';
import invoices from './invoices';
import { Layout } from './layout';
import orders from './orders';
import products from './products';
import reviews from './reviews';
import Segments from './segments/Segments';
import visitors from './visitors';
import { themes } from './themes/themes';
import dataProvider from './dataProvider';
import authProvider from './auth/authProvider';
import { Login } from './auth/login';

const i18nProvider = polyglotI18nProvider(
    locale => {
        if (locale === 'fr') {
            return import('./i18n/fr').then(messages => messages.default);
        }
        return englishMessages;
    },
    'en',
    [
        { locale: 'en', name: 'English' },
        { locale: 'fr', name: 'Français' },
    ]
);

const App = () => {
    const defaultTheme = themes[0];

    return (
        <Admin
            title="Posters Galore Admin"
            dataProvider={dataProvider}
            dashboard={Dashboard}
            layout={Layout}
            i18nProvider={i18nProvider}
            disableTelemetry
            theme={defaultTheme.light}
            darkTheme={defaultTheme.dark}
            defaultTheme="light"
            loginPage={Login}
            authProvider={authProvider}
            requireAuth
        >
            <CustomRoutes>
                <Route path="/segments" element={<Segments />} />
            </CustomRoutes>

            <Resource name="customers" {...visitors} />
            <Resource name="orders" {...orders} />
            <Resource name="invoices" {...invoices} />
            <Resource name="products" {...products} />
            <Resource name="categories" {...categories} />
            <Resource name="reviews" {...reviews} />
        </Admin>
    );
};

export default App;