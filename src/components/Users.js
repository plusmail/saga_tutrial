import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

const Users = ({users}) => {
    console.log("Users->", users);
    return (
        <div>
            <ul>
                {users.length > 0 && users.map(user => (
                    <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Users;