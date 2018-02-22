import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';

import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import routes from '../client/routes';

import reducers from '../client/reducers';

const router = express.Router();

const store = createStore(reducers, applyMiddleware(thunk));

router.get('*', (req, res) => {
    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(b => {
        let fetchData = b.route.component.fetchData;
        return fetchData instanceof Function ? fetchData(store, b.match.params) : Promise.resolve(null);
    });
    return Promise.all(promises)
        .then(data => {
            let context = {};
            const content = renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        {renderRoutes(routes)}
                    </StaticRouter>
                </Provider>
            );
            res.render('index', { locals: { title: 'Express', content: content, data: store.getState() } });
        })
        .catch(error => console.log(error));
});

module.exports = router;