export const urlreducers=(state='https://www.google.com/',action)=>
{
    switch(action.type){
        case 'button_click':
            return action.url;
        default:
            return state;
    }
};



