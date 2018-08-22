export default function DecrementCount(number){
    return ({
       type: 'DECREMENT_COUNT',
       payload: number
   });
};