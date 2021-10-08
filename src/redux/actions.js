import client from "../client/client"

const actions = {
    types: {
        NEWS_REQUEST_STARTED: 'NEWS_REQUEST_STARTED',
        NEWS_REQUEST_SUCCESSED: 'NEWS_REQUEST_SUCCESSED',
        NEWS_REQUEST_FAILED: 'NEWS_REQUEST_FAILED',
    },

    fetchNewsRequest: function () {
        return {
            type: this.types.NEWS_REQUEST_STARTED
        }
    },

    fetchNewsSuccess: function (result) {
        let newsArr = result.news;
        let news = [];
        for (let n of newsArr) {
            news.push({
                id: n.id,
                description: n.title,
                creation: new Date(n.creation_date),
                img: n.image_small
            });
        }
        return {
            type: this.types.NEWS_REQUEST_SUCCESSED,
            news
        }
    },

    fetchNewsFail: function () {
        return {
            type: this.types.NEWS_REQUEST_FAILED
        }
    },

    fetchNews: function () {
        return (dispatch) => {
            dispatch(this.fetchNewsRequest());
            client.loadNews()
                .then((result) => {
                    dispatch(this.fetchNewsSuccess(result));
                })
                .catch((e) => {
                    if (e.name === 'AbortError') {
                        console.warn(`Request aborted`);
                    }
                    dispatch(this.fetchNewsFail());
                    console.log('Failed load news!');
                })
        }
    },
}

export default actions;
