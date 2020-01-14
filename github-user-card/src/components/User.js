import React from 'react'

export const User = ({user}) => {
    console.log(user);
    return (
        <div>
            {user.login}
        </div>
    )
}
