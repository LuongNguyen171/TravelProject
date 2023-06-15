import Home from '~/pages/Home';
import About from '~/pages/About';
import Travel from '~/pages/Travel';
import Motherhood from '~/pages/Motherhood';
import DetailBlog from '~/pages/DetailBlog';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Travel', component: Travel },
    { path: '/motherhood', component: Motherhood },
    { path: '/detailblog/:id', component: DetailBlog },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
