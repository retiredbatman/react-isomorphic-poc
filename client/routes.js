
import App from './App';
import List from './containers/List';
import Info from './containers/Info';

import { fetchSuperHeros } from './actions/superHeros';

const routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: List
            },
            {
                path: '/list',
                component: List
            },
            {
                path: '/info/:id',
                component: Info
            }
        ]
    }
];

export default routes;