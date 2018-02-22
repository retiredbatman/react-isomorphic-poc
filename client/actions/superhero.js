import 'isomorphic-fetch';
export const RECEIEVE_SUPERHERO = 'RECEIEVE_SUPERHERO';

function recieveSuperHero(superhero) {
    return {
        type: RECEIEVE_SUPERHERO,
        data: superhero
    };
}

export function fetchSuperHero(id) {
    return (dispatch) => {
        const url = `https://private-anon-e28a0a4403-superheroes.apiary-mock.com/characters/${id}`;
        return fetch(url)
            .then(response => {
                return response.json();
            })
            .then((superhero) => {
                dispatch(recieveSuperHero(superhero));
            })
            .catch(error => {
                console.log(error);
            });
    }
}