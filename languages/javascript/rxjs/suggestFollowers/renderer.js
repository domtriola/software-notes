export const el = (
  tagName,
  {
    id=null,
    classNames=null,
    innerHTML=null
  }={}
) => {
  const element = document.createElement(tagName);

  if (id) {
    element.id = id;
  }

  element.class = classNames;
  element.innerHTML = innerHTML;

  return element;
};

export const createUserList = (parent) => {
  const userList = el('div');
  parent.appendChild(userList);
  return userList;
};

export const createUserSuggestion = (parent, { login }) => {
  const userSuggestion = el('div', { innerHTML: login });
  parent.appendChild(userSuggestion);
  return userSuggestion;
}

export const createRefreshButton = (parent) => {
  const refreshButton = el('button', { innerHTML: 'Refresh' });
  parent.appendChild(refreshButton);
  return refreshButton;
}
