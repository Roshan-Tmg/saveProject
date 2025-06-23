import { api } from "../../Config/api"
import { FIND_TWEET_BY_ID_FAILURE, FIND_TWEET_BY_ID_SUCCESS, GET_ALL_TWEETS_FAILURE, GET_ALL_TWEETS_REQUEST, GET_ALL_TWEETS_SUCCESS, GET_USERS_TWEETS_FAILURE, GET_USERS_TWEETS_SUCCESS, LIKE_TWEETS_FAILURE, LIKE_TWEETS_SUCCESS, REPLY_TWEETS_FAILURE, REPLY_TWEETS_SUCCESS, RETWEET_FAILURE, RETWEET_SUCCESS, TWEET_CREATE_FAILURE, TWEET_CREATE_SUCCESS, TWEET_DELETE_FAILURE, TWEET_DELETE_SUCCESS, USERS_LIKE_TWEET_FAILURE, USERS_LIKE_TWEET_SUCCESS } from "./ActionType";

export const getAllTweets = () => async (dispatch)=> {
    try {
        const {data}= await api.get(`/api/twits/`);
        console.log("Get all tweets", data);
        dispatch({
            type:GET_ALL_TWEETS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log("Error in fetching all tweets", error);
        dispatch({
            type: GET_ALL_TWEETS_FAILURE,
            payload: error.message || "Something went wrong while fetching tweets"
        })
        
    }
}

export const getUsersTweets = (userId) => async (dispatch)=> {
    try {
        const {data}= await api.get(`/api/twits/user/${userId}`);
        console.log("Get user tweets", data);
        dispatch({
            type:GET_USERS_TWEETS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log("Error in fetching all tweets", error);
        dispatch({
            type: GET_USERS_TWEETS_FAILURE,
            payload: error.message || "Something went wrong while fetching tweets"
        })
        
    }
}


export const findTwitsBYLikesContaineUser = (userId) => async (dispatch)=> {
    try {
        const {data}= await api.get(`/api/twits/user/${userId}/likes`);
        console.log("Get liked user tweets", data);
        dispatch({
            type:USERS_LIKE_TWEET_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log("Error in fetching all tweets", error);
        dispatch({
            type: USERS_LIKE_TWEET_FAILURE,
            payload: error.message || "Something went wrong while fetching tweets"
        })
        
    }
}


export const findTwitsById = (twitId) => async (dispatch)=> {
    try {
        const {data}= await api.get(`/api/twits/${twitId}`);
        console.log("find tweets by id", data);
        dispatch({
            type:FIND_TWEET_BY_ID_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log("Error in fetching all tweets", error);
        dispatch({
            type: FIND_TWEET_BY_ID_FAILURE,
            payload: error.message || "Something went wrong while fetching tweets"
        })
        
    }
}


export const createTweet = (tweetData) => async (dispatch)=> {
    try {
        const {data}= await api.post(`/api/twits/create`, tweetData);
        console.log("created tweet", data);
        dispatch({
            type:TWEET_CREATE_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log("Error in fetching all tweets", error);
        dispatch({
            type: TWEET_CREATE_FAILURE,
            payload: error.message || "Something went wrong while fetching tweets"
        })
        
    }
}


export const createTweetReplay = (tweetData) => async (dispatch)=> {
    try {
        const {data}= await api.post(`/api/twits/reply`, tweetData);
        console.log("reply tweet", data);
        dispatch({
            type:REPLY_TWEETS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log("Error in fetching all tweets", error);
        dispatch({
            type: REPLY_TWEETS_FAILURE,
            payload: error.message || "Something went wrong while fetching tweets"
        })
        
    }
}

export const createReTweet = (twitId) => async (dispatch)=> {
    try {
        const {data}= await api.put(`/api/twits/${twitId}/reply`);
        console.log("Retweet", data);
        dispatch({
            type:RETWEET_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log("Error in fetching all tweets", error);
        dispatch({
            type: RETWEET_FAILURE,
            payload: error.message || "Something went wrong while fetching tweets"
        })
        
    }
}


export const likeTweet = (twitId) => async (dispatch)=> {

//     if (!twitId || typeof twitId !== "number") {
//   console.error("Invalid or missing twitId:", twitId);
//   return;
// }

    try {
        const {data}= await api.post(`/api/${twitId}/likes`);
        console.log("like tweet ", data);
        dispatch({
            type:LIKE_TWEETS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log("Error in fetching all tweets", error);
        dispatch({
            type: LIKE_TWEETS_FAILURE,
            payload: error.message || "Something went wrong while fetching tweets"
        })
        
    }
}


export const deleteTweet = (twitId) => async (dispatch)=> {
    try {
        const {data}= await api.post(`/api/tweet/${twitId}`);
        console.log("deleted tweet ", data);
        dispatch({
            type:TWEET_DELETE_SUCCESS,
            payload: twitId
        })
        
    } catch (error) {
        console.log("Error in fetching all tweets", error);
        dispatch({
            type: TWEET_DELETE_FAILURE,
            payload: error.message || "Something went wrong while fetching tweets"
        })
        
    }
}


