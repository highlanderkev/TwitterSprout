import * as $ from 'jquery';
import { useFunctions } from 'reactfire';

const BASE_URL = '/twitter/user/search';

export const UserSearchService = {
    queryUsername: (query: string) => {
        let url = `${BASE_URL}?username=${query}`;
        return $.ajax({
            url: url,
            dataType: 'json',
        }).fail((jqXHR, status, err) => {
            console.error(status, err.toString());
        });
    }
};

// export const helloWorld = () => {
//   const callable = useFunctions().httpsCallable('helloWorldCallable');
//   callable({}).then((result) => {
//     console.log('result: ', result);
//   });
// }

export async function helloWorld(): Promise<any> {
  const callable = useFunctions().httpsCallable('helloWorldCallable');
  const result = await callable({}).then((result) => {
    console.log('result: ', result);
  });
  return result;
}

