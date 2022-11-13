import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethod";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/user.constants";
import axios from "axios";

export const login = async (dispatch, user) =>  {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}

//Register
export const register = (username, email, password) => async (dispatch) => {
    try {

        dispatch({type: USER_REGISTER_REQUEST});

        const config = {
            headers: {
                "Content-Type" : "application/json",
            },
        };

        const {data} = axios.post (
            "https://hmfurniture.herokuapp.com/auth/register",
            {username, email, password},
            config
        );
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data});
        localStorage.setItem("persist:root", JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        
    };
}