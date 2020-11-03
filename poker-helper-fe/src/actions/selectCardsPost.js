export const selectCardsPostDataSuccess = nameCombs => {
  return {
    type: "SELECT_CARDS_POST",
    nameCombs
  }
};
export const postError = () => {
  return {
    type: "POST_ERROR",
  }
};
export function selectCardsPostData(data) {
  const payload = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  return (dispatch) => {
    fetch("http://localhost:3001/postCards", payload)
      .then(response => response.json())
      .then(response => dispatch(selectCardsPostDataSuccess(response)))
      .catch(err => dispatch(postError()) )
  }
}
