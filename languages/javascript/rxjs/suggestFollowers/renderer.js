export const el = (
  tagName,
  {
    id=null,
    className=null,
    innerHTML=null
  }={}
) => {
  const element = document.createElement(tagName);

  if (id) {
    element.id = id;
  }

  if (className) {
    element.className = className;
  }

  element.innerHTML = innerHTML;

  return element;
};

export const createUserList = (parent) => {
  const userList = el('div');

  for (let i = 0; i < 3; i++) {
    createUserSuggestion(userList, { login: null }, i);
  }

  parent.appendChild(userList);
  return userList;
};

export const createUserSuggestion = (parent, { login }, index) => {
  const userSuggestion = el('div', { id: `suggestion-${index}` });

  userSuggestion.append(
    el('p', {
      innerHTML: login,
      className: 'user-suggestion',
    })
  );
  userSuggestion.append(
    el('a', {
      id: `close-suggestion-${index}`,
      className: 'close-suggestion',
      innerHTML: 'x',
    })
  )

  parent.appendChild(userSuggestion);
  return userSuggestion;
};

export const updateUserSuggestion = (index, innerHTML) => {
  const userSuggestion = document.getElementById(`suggestion-${index}`);
  if (userSuggestion) {
    const user = userSuggestion.getElementsByClassName('user-suggestion');
    user[0].innerHTML = innerHTML;
  }
  return userSuggestion;
};

export const createRefreshButton = (parent) => {
  const refreshButton = el('button', { innerHTML: 'Refresh' });
  parent.appendChild(refreshButton);
  return refreshButton;
};
