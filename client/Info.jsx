import React, { Component } from 'react';

const Info = ({ superHero }) => {
    return (
        <div>
            {superHero ? (
                <div>
                    <div>{superHero.name}</div>
                    <div><img src={superHero.picture} /></div>
                </div>
            ) : null}
        </div>
    );
}

export default Info;