import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {getUser} from '../modules/user';
import User from '../components/User';

const UserContainer = ({id}) =>{
    const user= useSelector(state => state.user.user);
    const dispatch = useDispatch();
    console.log("user-11111111>", user.id, parseInt(id, 10));

    // if(!user){
    //     return dispatch(getUser(id))
    // }

    useEffect(()=> {
        if(user.id === parseInt(id, 10)) return;
        console.log("user-222222222>", user);
        dispatch(getUser(id));
    });

    console.log("user-33333333->", user);

    return <User user={user}/>
}

export default UserContainer;