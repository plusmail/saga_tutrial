import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {getUsers} from '../modules/users';
import Users from '../components/Users';


const UsersContainer = ()=>{
    const users= useSelector((state)=> state.users.users);
    const dispatch = useDispatch();

    useEffect(()=> {
        if( users) return ;
        dispatch(getUsers());

    }, [dispatch, users]);

    return <Users users={users}/>
}

export default UsersContainer;