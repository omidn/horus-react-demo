const ENDPOINT = 'http://localhost:9002';


export const getTimeAsync = () => {
    return fetch(ENDPOINT + '/').then(res => {
        return res.json();
    });
}
