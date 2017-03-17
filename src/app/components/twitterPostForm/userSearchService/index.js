import $ from 'jquery';

const BASE_URL = '/twitter/user/search';

export const UserSearchService = {
    queryUsername: (query) => {
        let url = `${BASE_URL}?username=${query}`;
        return $.ajax({
            url: url,
            dataType: 'json',
        }).fail((jqXHR, status, err) => {
            console.error(this.props.url, status, err.toString());
        });
    }
};