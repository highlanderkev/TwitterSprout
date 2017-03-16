import React from "react";

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: props.users || []
        };
    }

    render() {
        return (
            <ul>
            {this.state.users.map((user) =>
                <li key={user.name}>
                    <a href={user.name} target='_blank'>
                        <img src={user.profile_image_url_https} alt="user-profile-image"/>
                        {user.screen_name}
                    </a>
                </li>
            )}
            </ul>
        );
    }
}

