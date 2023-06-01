import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {getUsers} from '../modules/users';
import Users from '../components/Users';
import {getUser} from "../modules/user";


const UsersContainer = ()=>{
    const dispatch = useDispatch();
    const users= useSelector((state)=> state.users.users);
    console.log("UsersContainer useEffect", users);

    useEffect(()=> {
            dispatch(getUsers())
    }, [dispatch]);

    return <Users users={users}/>
}

export default UsersContainer;