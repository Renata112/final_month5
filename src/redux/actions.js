import {REGISTER_USER} from "./types";


export const registerUser = (user) => ({
    type: REGISTER_USER,
    payload: user

})