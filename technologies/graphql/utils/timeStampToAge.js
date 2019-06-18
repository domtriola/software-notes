const timeStampToAge = (timeStamp) => {
  const now = new Date();
  const date = new Date(timeStamp);
  return now.getFullYear() - date.getFullYear();
};

module.exports = timeStampToAge;
