export const ADD_ENTERPRISE = "ADD_ENTERPRISE";
export const REMOVE_ENTERPRISE = "REMOVE_ENTERPRISE";
export const GET_JOBS = "GET_JOBS";

const api = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

// ACTION CREATOR
export const addToFavoritesAction = (enterpriseSelect) => {
  return {
    type: ADD_ENTERPRISE,
    payload: enterpriseSelect,
  };
};

export const removeFromFavoritesAction = (enterpriseSelect) => {
  return {
    type: REMOVE_ENTERPRISE,
    payload: enterpriseSelect,
  };
};

export const getJobsAction = (query) => {
  //prende la query passata dall'input form
  return async (dispatch) => {
    try {
      const response = await fetch(api + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
