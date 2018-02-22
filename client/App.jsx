import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>{renderRoutes(this.props.route.routes)}</div>)
    }
}

export default App;