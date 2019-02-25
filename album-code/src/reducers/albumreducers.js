export const albumreducers=(state=[],action)=>
{
    switch(action.type){
        case 'fetch_data':
            return action.data;
        default:
            return state;
    }
};

