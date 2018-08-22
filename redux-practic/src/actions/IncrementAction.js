export default function IncrementCount(number){
     return ({
        type: 'INCREMENT_COUNT',
        payload: number
    });
};