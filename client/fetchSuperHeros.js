import 'isomorphic-fetch';


export default function loadSuperHeros() {
    const p = new Promise((resolve) => {
        console.log('fetch');
        fetch('https://private-anon-e28a0a4403-superheroes.apiary-mock.com/characters/1')
            .then(response => {
                return response.json();
            })
            .then((superheroes) => {
                resolve(superheroes);
            })
    });
    return p;
}
