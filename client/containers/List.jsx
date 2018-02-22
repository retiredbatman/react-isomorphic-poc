import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../List';
import { fetchSuperHeros } from '../actions/superHeros';

const mapStateToProps = (state) => {
    return { superHeros: state.superHeros.data };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchSuperHeros: () => {
            dispatch(fetchSuperHeros());
        }
    }
}

class ListContainer extends Component {
    static fetchData(store) {
        return store.dispatch(fetchSuperHeros());
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchSuperHeros();
    }
    render() {
        return (<List superHeros={this.props.superHeros} />);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);