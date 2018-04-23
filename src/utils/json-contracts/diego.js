import get from 'lodash/get';
import isArray from 'lodash/isArray';

export const diegoAdapter = (json) => {
    return new Promise((resolve, reject) => {
        let resultSet = get(json, 'data.output');

        /* !resultSet || return;*/
        if (!resultSet || !isArray(resultSet)) {
            return;
        }

        let response = resultSet.filter(x => x[0] === -1).map(x => {
            return {
                text: x[3],
                aux: false,
                cv_indicators: [
                    x[12], x[13], x[14], x[15], x[16]
                ], tc_indicators: [
                    x[20], x[21], x[22], x[24]
                ], tc_indicators_topic: [
                    x[29], x[30], x[31], x[32]
                ]
            };
        });
        resolve({
            data: response
        });
    });
}

export const hello = () => {
    console.log('hello');
}

export default {m: 'h'};



