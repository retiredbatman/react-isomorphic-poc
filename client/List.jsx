import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        console.log(this.props.superHeros);
    }
    render() {
        return (<div>
            {this.props.superHeros.map(s => {
                return (
                    <div key={s.id}>
                        <Link to={`/info/${s.id}`}>{s.name}</Link>
                    </div>
                );
            })}
        </div>);
    }
}

export default List;