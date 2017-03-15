import React from "react";
import $ from 'jquery';

const BASE_URL = '/twitter/user/search';

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            users: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.queryServer = this.queryServer.bind(this);
    }

    handleChange(event) {
        let query = event.target.value;
        console.log("query", query);
        this.setState({
            query: query
        });
        if(query.length > 0){
            this.queryServer(query);
        }
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.query);
        event.preventDefault();
    }

    queryServer(query) {
        let url = `${BASE_URL}?username=${query}`;
        $.ajax({
            url: url,
            dataType: 'json',
        }).done((data) => {
            console.log("data", data);
            if(data && data.hasOwnProperty('users')){
                this.setState({ users: data.users});
            }
        }).fail((jqXHR, status, err) => {
            console.error(this.props.url, status, err.toString());
        });
    }

    render() {
        // let users = this.state.users;
        return (
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
         <ul>
          {this.state.users.map((user) =>
            <li key={user.name}>
              <a href={user.name} target='_blank'>
              <img src={user.profile_image_url} alt="user-profile-image"/>
              {user.screen_name}
              </a>
            </li>
          )}
        </ul>
      </form>
        );
    }
}