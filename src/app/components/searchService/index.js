import $ from 'jquery';

export const SearchService = {
    BASE_URL: '/twitter/user/search',
    queryUsername: (query) => {
        let url = `${this.BASE_URL}?username=${query}`;
        $.ajax({
            url: url,
            dataType: 'json',
        }).done((data) => {
            console.log("data", data);
            if(data && data.hasOwnProperty('users')){
                let users = data.users.map((user) => {
                    return {
                        text: user.name,
                        value: (<MenuItem primaryText={user.name} secondaryText="&#9786;"/>)
                    };
                });
                console.log("users: ", users);
                this.setState({ users: users, openAutoComplete: true});
            }
        }).fail((jqXHR, status, err) => {
            console.error(this.props.url, status, err.toString());
        });
    }
};