export const cardsFetchData = cardsDeck => {
      return {
    type: "CARDS_FETCH",
    cardsDeck
  }
};
export const cardsFetchError = () => {
  return {
    type: "ERROR_FETCH",
  }
};

export function getNews() {
  return (dispatch) => {
    fetch("http://localhost:3001/getDeck")
      .then(response => response.json())
      .then(respons => dispatch(cardsFetchData(respons)))
      .catch(() => dispatch(cardsFetchError()))
  }
}

