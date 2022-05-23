// Acciones

// Interface, 
interface Action {
    type: string;
    payload?: any;
}

// Objeto
// const incrementadorAction: Action = {
//     type: 'INCREMENTAR'
// };


/**
 * Es una función que recibe 2 argumentos
 * 1.-State 
 * 2.-Action 
 * 
 * Rules: Siempre debe retornar un estado
 */

function reducer(state = 10, action: Action) {

    // if (action.type === 'INCREMENTAR') {
    //     return state + 1;
    // }
    
    // return state;

    switch (action.type) {

        case 'INCREMENTAR':
            return state += 1;
        
        case 'DECREMENTAR':
            return state -= 1;

        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        default:
            return state;
    }
}

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

console.log(reducer(10, incrementadorAction));

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

console.log(reducer(10, decrementadorAction));

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

console.log(reducer(10, multiplicarAction));

const divisionAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};

console.log(reducer(10, divisionAction));