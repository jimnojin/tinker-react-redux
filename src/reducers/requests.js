
export const FILTER = 'requests/FILTER';
export const IS_LOADING = 'requests/IS_LOADING';
export const FETCH_SUCCESS = 'requests/FETCH_SUCCESS';

export const REQUEST_STATUS = {
  DENIED: 1,
  PENDING: 2,
  APPROVED: 3
}

const initialState = {
  isLoading: true,
  data: [],
  filterBy: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case FILTER:
      return {
        ...state,
        filterBy: action.payload
      };

    default:
      return state
  }
}

export const isLoading = bool => {
  return {
    type: IS_LOADING,
    payload: bool
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(isLoading(true));
    
    const data = [
      { id: 1, status: REQUEST_STATUS.APPROVED, reason: 'Reason 1' },
      { id: 2, status: REQUEST_STATUS.PENDING, reason: 'Reason 2' },
      { id: 3, status: REQUEST_STATUS.DENIED, reason: 'Reason 3' }
    ];

    setTimeout(() => {
      dispatch(isLoading(false));

      dispatch(fetchSuccess(data));
    }, 2000);
  };
}

export function fetchSuccess(data) {
  return {
      type: FETCH_SUCCESS,
      payload: data
  };
}

export const filter = (filterBy) => {
  return {
    type: FILTER,
    payload: filterBy
  };
}
