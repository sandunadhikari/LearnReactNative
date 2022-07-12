import {SET_USER_NAME , SET_USER_PASSWORD, SET_PLUS, SET_MINUS, GET_MEME} from './actions';

const initialState = {
    name: '',
    password: '',
    age: 10,
    meme: [],
}

function userReducer(state = initialState, action){
    switch(action.type){
        case SET_USER_NAME:
            return{...state, name: action.payload };

        case SET_USER_PASSWORD:
            return{...state, password: action.payload }; 

        case SET_PLUS:
            return{...state, age: state.age + 1 }; 

        case SET_MINUS:
            return{...state, age: state.age - 1 };     

        case GET_MEME:
            //console.log(action.payload);
            return{...state, meme: action.payload };    
        
        default:
            return state;    
            
    }
}

export default userReducer;