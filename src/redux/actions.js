export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_PLUS = 'SET_PLUS';
export const SET_MINUS = 'SET_MINUS';
export const GET_MEME = 'GET_MEME';

const API_URL = 'https://api.imgflip.com/get_memes';

export const getMeme = () => {

    try{
        return async dispatch =>{
            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            //console.log(JSON.stringify(json.data.memes));
            if(json){
                dispatch({
                    type: GET_MEME,
                    payload: json.data.memes,
                });
            }else{
                console.log('unable to fetch!');
            }
        }

    }catch(error){
        console.log(error);
    }

} 


export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
}

export const setPassword = password => dispatch => {
    dispatch({
        type: SET_USER_PASSWORD,
        payload: password,
    });
}

export const setPlus = age => dispatch => {
    dispatch({
        type: SET_PLUS,
        payload: age,
    });
}

export const setMinus = age => dispatch => {
    dispatch({
        type: SET_MINUS,
        payload: age,
    });
}