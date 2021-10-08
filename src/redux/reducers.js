import actions from "./actions";

const initialState = {
    news: {
        isLoading: false,
        isFetched: false,
        content: []
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.types.NEWS_REQUEST_STARTED:
        case actions.types.NEWS_REQUEST_SUCCESSED:
        case actions.types.NEWS_REQUEST_FAILED: {
            return Object.assign({}, state, {
                news: newsReducer(state.news, action),
            });
        }
    }
}

function newsReducer(state, action) {
    switch (action.type) {
        case actions.types.NEWS_REQUEST_STARTED: {
            return Object.assign({}, state, {
                isLoading: true
            });
        }

        case actions.types.NEWS_REQUEST_SUCCESSED: {
            return Object.assign({}, state, {
                isLoading: false,
                content: action.news,
                isFetched: true
            });
        }

        case actions.types.NEWS_REQUEST_FAILED: {
            return Object.assign({}, state, {
                isLoading: false,
                content: [],
                isFetched: true
            });
        }
    }
}

export default reducer;
