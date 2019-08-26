import { Observable, of, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { createUserList, createUserSuggestion, createRefreshButton } from './renderer';

const root = document.getElementById('root');
const userList = createUserList(root);
const refreshButton = createRefreshButton(root);

// Just creates a stream
const usersApiRequestStream = of('https://api.github.com/users');

// Subscribe to do something with that stream
// usersApiStream.subscribe((requestUrl) => {
//   fetch(requestUrl)
//     .then(res => console.log(res));
// });

// Create a response stream manually
// usersApiRequestStream.subscribe((requestUrl) => {
//   const usersApiResponseStream = Observable.create((observer) => {
//     fetch(requestUrl)
//       .then(res => observer.next(res))
//   });

//   usersApiResponseStream.subscribe(res => res.json().then(console.log));
// });

// Create a metastream by mapping promises to streams
// const usersApiResponseMetastream = usersApiRequestStream.pipe(
//   map(requestUrl => from(fetch(requestUrl)))
// );
// usersApiResponseMetastream.subscribe(function (response) {
//   console.log('------------------------------');
//   console.log('Response from metastream')
//   console.log(response);
//   console.log('------------------------------');
// });

// Response Stream
const usersApiResponseStream = usersApiRequestStream.pipe(
  mergeMap(requestUrl => from(fetch(requestUrl)))
);

// Subscribe to response stream to render user list
usersApiResponseStream.subscribe(function (response) {
  response.json().then((users) => {
    users.slice(0, 3).map(user => {
      createUserSuggestion(userList, user)
    });
  });
});

const refreshClickStream = from(refreshButton, 'click');
