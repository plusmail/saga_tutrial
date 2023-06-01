import { useParams } from "react-router-dom";
import UserContainer from "../containers/UserContainer";

const UserPage = ()=>{
    const {id} = useParams();
    console.log("UserPage->", id);
    return <UserContainer id={id}/>;
};

export default UserPage;