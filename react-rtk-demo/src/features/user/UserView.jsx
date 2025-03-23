import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserView = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    console.log('User state:', user);

    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <h3>Loading...</h3>}
            {!user.loading && user.error ? <h3>Error: {user.error}</h3> : null}
            {!user.loading && user.users && user.users.length > 0 ? (
                <ul>
                    {
                        user.users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            ) : (
                !user.loading && <h3>No users available</h3>
            )}
        </div>
    )
}

export default UserView;
