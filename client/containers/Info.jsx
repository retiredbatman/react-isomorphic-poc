import React, { Component } from 'react';
import { connect } from 'react-redux';

import Info from '../Info';
import { fetchSuperHero } from '../actions/superhero';

const mapStateToProps = (state) => {
    return { superHero: state.superHero.data };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchSuperHero: (id) => {
            dispatch(fetchSuperHero(id));
        }
    }
}

class InfoContainer extends Component {
    static fetchData(store, params) {
        if (params && params.id) {
            return store.dispatch(fetchSuperHero());
        }
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchSuperHero(this.props.match.params.id);
    }
    render() {
        return (<Info superHero={this.props.superHero} />);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);