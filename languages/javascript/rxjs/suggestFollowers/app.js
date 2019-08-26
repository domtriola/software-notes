import { of, from, fromEvent, merge } from 'rxjs';
import { map, mergeMap, combineLatest, startWith } from 'rxjs/operators';
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

// Create response stream which actually sends the requests and returns result
const usersApiResponseStream = usersApiRequestStream.pipe(
  mergeMap(requestUrl => from(fetch(requestUrl))),
  mergeMap(response => from(response.json())),
);

// Create streams for the close buttons
const close1 = document.getElementById('close-suggestion-0');
const close1ClickStream = fromEvent(close1, 'click');
const close2 = document.getElementById('close-suggestion-1');
const close2ClickStream = fromEvent(close2, 'click');
const close3 = document.getElementById('close-suggestion-2');
const close3ClickStream = fromEvent(close3, 'click');

// TODO: Refactor to DRY up
// Create a stream for each suggestion
const suggestion1Stream = close1ClickStream.pipe(
  startWith('init click'),
  combineLatest(usersApiResponseStream, (_click, users) => {
    return { user: users[Math.floor(Math.random() * users.length)], index: 0 };
  })
);
const suggestion2Stream = close2ClickStream.pipe(
  startWith('init click'),
  combineLatest(usersApiResponseStream, (_click, users) => {
    return { user: users[Math.floor(Math.random() * users.length)], index: 1 };
  })
);
const suggestion3Stream = close3ClickStream.pipe(
  startWith('init click'),
  combineLatest(usersApiResponseStream, (_click, users) => {
    return { user: users[Math.floor(Math.random() * users.length)], index: 2 };
  })
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
