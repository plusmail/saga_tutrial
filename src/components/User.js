const User = ({user}) => {
    // JSON.stringify(user);
    const {email, name, username} = user;
    // console.log("User->", email);

    return (
        <div>
            <h1>
             {username} ({user.name})
            </h1>
            <p>
                 <b>email : </b> {user.email}
            </p>
        </div>
    )
}

export default User;