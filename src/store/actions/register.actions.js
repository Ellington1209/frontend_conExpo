import { Http } from '../../conf/GlobalConfig';
import { changeloading } from "./loading.action";
import { setUserToken } from './Auth.actions';

export const actionTypes = {
    CHANGE: 'CHANGE',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}
export const changeValue = (payload) => ({
  type: actionTypes.CHANGE,
  payload
})
export const registerError = (payload) => ({
    type: actionTypes.ERROR,
    payload
  })
  export const success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
  })
  
  export const registerUser = (data) => {
    return dispatch => {
        dispatch(changeloading({
            open: true,
            msg: ' Registrando Usuário ',
        }))
        return Http.post('/register',data)
        .then(res =>{
            dispatch(changeloading({
                open:false
              
            }))
            if(typeof res !== 'undefined'){
                if(res.data.error){
                    dispatch(registerError(res.data.error));
                }
                if(res.data.success){
                    alert("cadastrado com sucesso")
                }
                dispatch(setUserToken(res.data.token));
                dispatch(success(true))
            }
        })
        .catch(() => {
            dispatch(changeloading({
                open:false
              
            }))
        })
    }
  }
