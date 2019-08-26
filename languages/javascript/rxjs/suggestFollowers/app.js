import { of, from, fromEvent, merge } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { createUserList, createUserSuggestion, createRefreshButton, updateUserSuggestion } from './renderer';

const GITHUB_USERS_API = 'https://api.github.com/users';

// Render HTML scaffold
const root = document.getElementById('root');
const userList = createUserList(root);
const refreshButton = createRefreshButton(root);

// Initialize request streams
const startupRequestStream = of(GITHUB_USERS_API);
const refreshClickStream = fromEvent(refreshButton, 'click');
const refreshRequestStream = refreshClickStream.pipe(
  map(() => {
    const randomOffset = Math.floor(Math.random() * 500);
    return `${GITHUB_USERS_API}?since=${randomOffset}`;
  })
);

// Combine requests into one stream
const usersApiRequestStream = merge(startupRequestStream, refreshRequestStream);

// Create response stream which actually sends the requests
const usersApiResponseStream = usersApiRequestStream.pipe(
  mergeMap(requestUrl => from(fetch(requestUrl)))
);

// Subscribe to response stream to do something with the outputs
usersApiResponseStream.subscribe(function (response) {
  response.json().then((users) => {
    users.slice(0, 3).map((user, index) => {
      const updatedSuggestion = updateUserSuggestion(index, user.login);
      console.log(updatedSuggestion);
      if (!updatedSuggestion) {
        createUserSuggestion(userList, user, index);
      }
    });
  });
});
