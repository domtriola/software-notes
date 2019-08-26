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
  mergeMap(requestUrl => from(fetch(requestUrl))),
  mergeMap(response => from(response.json())),
);

// Create a stream for each suggestion
const suggestion1Stream = usersApiResponseStream.pipe(
  map(users => ({ user: users[Math.floor(Math.random() * users.length)], index: 0 }))
);
const suggestion2Stream = usersApiResponseStream.pipe(
  map(users => ({ user: users[Math.floor(Math.random() * users.length)], index: 1 }))
);
const suggestion3Stream = usersApiResponseStream.pipe(
  map(users => ({ user: users[Math.floor(Math.random() * users.length)], index: 2 }))
);

// Subscribe to response stream to do something with the outputs
suggestion1Stream.subscribe(({ user, index }) => {
  const updatedSuggestion = updateUserSuggestion(index, user.login);
  if (!updatedSuggestion) {
    createUserSuggestion(userList, user, index);
  }
});
suggestion2Stream.subscribe(({ user, index }) => {
  const updatedSuggestion = updateUserSuggestion(index, user.login);
  if (!updatedSuggestion) {
    createUserSuggestion(userList, user, index);
  }
});
suggestion3Stream.subscribe(({ user, index }) => {
  const updatedSuggestion = updateUserSuggestion(index, user.login);
  if (!updatedSuggestion) {
    createUserSuggestion(userList, user, index);
  }
});
