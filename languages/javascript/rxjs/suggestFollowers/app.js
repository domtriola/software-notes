import { of, from, fromEvent, merge } from 'rxjs';
import { map, mergeMap, combineLatest, startWith } from 'rxjs/operators';
import { createUserList, createUserSuggestion, createRefreshButton, updateUserSuggestion } from './renderer';

const GITHUB_USERS_API = 'https://api.github.com/users';
const SUGGESTION_COUNT = 3;

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
for (let i = 0; i < SUGGESTION_COUNT; i++) {
  const closeButton = document.getElementById(`close-suggestion-${i}`);
  const closeClickStream = fromEvent(closeButton, 'click');

  const suggestionStream = closeClickStream.pipe(
    startWith('init click'),
    combineLatest(usersApiResponseStream, (_click, users) => {
      return { user: users[Math.floor(Math.random() * users.length)], index: i };
    })
  );

  suggestionStream.subscribe(({ user, index }) => {
    const updatedSuggestion = updateUserSuggestion(index, user.login);
    if (!updatedSuggestion) {
      createUserSuggestion(userList, user, index);
    }
  });
}
