import React from "react";
import { connect } from "react-redux";
import actions from "../../../redux/actions";
import News from "../../presentational/News/News";

const NewsManager = connect(mapStateToProps, mapDispatchToProps)(News);

function mapStateToProps(state) {
    return {
        newsInfo: state?.news
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onNeedLoadNews: () => {
            dispatch(actions.fetchNews());
        }
    };
}

export default NewsManager;
