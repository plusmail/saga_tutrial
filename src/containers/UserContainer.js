import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {getUser} from '../modules/user';
import User from '../components/User';

const UserContainer = ({id}) =>{
    const dispatch = useDispatch();
    const user= useSelector(state => state.user.user);

    useEffect(()=> {
        if(user && user.id === parseInt(id, 10)) return;
        dispatch(getUser(id));
    });

    console.log("user-11111>", user);
    // if(!user){
    //     return dispatch(getUser(id))
    // }

    return <User user={user}/>
}

export default UserContainer;