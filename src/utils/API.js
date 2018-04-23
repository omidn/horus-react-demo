import { diegoAdapter as adapter } from './json-contracts/diego';
const ENDPOINT = 'http://localhost:9001';

/* export const fetch_demo_query = (q) => {
 *     return fetch(ENDPOINT + '/').then(res => {
 *         return res.json();
 *     });
 * };*/

export const fetch_demo_query = (q) => {
    return fetch(ENDPOINT + '/diego').then(res => {
        return res.json();
    }).then(adapter);
};
