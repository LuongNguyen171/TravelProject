import Home from '~/pages/Home';
import About from '~/pages/About';
import Travel from '~/pages/Travel';
import Motherhood from '~/pages/Motherhood';
import DetailBlog from '~/pages/DetailBlog';
import Shop from '~/pages/Shop';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/About', component: About },
    { path: '/Travel', component: Travel },
    { path: '/motherhood', component: Motherhood },
    { path: '/detailblog/:id', component: DetailBlog },
    { path: '/shop', component: Shop },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
