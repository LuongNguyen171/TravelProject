import Home from '~/pages/Home';
import About from '~/pages/About';
import Travel from '~/pages/Travel';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/About', component: About },
    { path: '/Travel', component: Travel },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
