import 'isomorphic-fetch';
export const RECEIEVE_SUPERHEROS = 'RECEIEVE_SUPERHEROS';

function recieveSuperHeros(superheroes) {
    return {
        type: RECEIEVE_SUPERHEROS,
        data: superheroes
    };
}

export function fetchSuperHeros() {
    return (dispatch) => {
        const url = `http://private-anon-e28a0a4403-superheroes.apiary-mock.com/characters/`;
        return fetch(url)
            .then(response => {
                return response.json();
            })
            .then((superheroes) => {
                dispatch(recieveSuperHeros(superheroes.Characters));
            })
            .catch(error => {
                console.log(error)
            });
    }
}