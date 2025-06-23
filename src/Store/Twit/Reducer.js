import { FIND_TWEET_BY_ID_FAILURE, FIND_TWEET_BY_ID_REQUEST, FIND_TWEET_BY_ID_SUCCESS, GET_ALL_TWEETS_SUCCESS, GET_USERS_TWEETS_SUCCESS, LIKE_TWEETS_FAILURE, LIKE_TWEETS_REQUEST, LIKE_TWEETS_SUCCESS, REPLY_TWEETS_SUCCESS, RETWEET_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, TWEET_CREATE_FAILURE, TWEET_CREATE_REQUEST, TWEET_CREATE_SUCCESS, TWEET_DELETE_FAILURE, TWEET_DELETE_REQUEST, TWEET_DELETE_SUCCESS, USERS_LIKE_TWEET_FAILURE, USERS_LIKE_TWEET_REQUEST, USERS_LIKE_TWEET_SUCCESS } from "./ActionType";

const initialState = {

    loading: false,
    data: null,
    error: null,
    twits: [],
    twit: null,
}


export const twitReducer = (state = initialState, action) => {

    switch (action.type) {
        case TWEET_CREATE_REQUEST:
        case TWEET_DELETE_REQUEST:
        case USERS_LIKE_TWEET_REQUEST:
        case LIKE_TWEETS_REQUEST:
        case RETWEET_REQUEST:
        case FIND_TWEET_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case TWEET_CREATE_FAILURE:
        case TWEET_DELETE_FAILURE:
        case USERS_LIKE_TWEET_FAILURE:
        case LIKE_TWEETS_FAILURE:
        case RETWEET_FAILURE:
        case FIND_TWEET_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case TWEET_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                twits: [action.payload, ...state.twits],
            };
        
        // case GET_ALL_TWEETS_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: null,
        //         twits: [action.payload, ...state.twits],
        //     };
              
        case GET_ALL_TWEETS_SUCCESS:
        case GET_USERS_TWEETS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                twits: action.payload,
            };

        case USERS_LIKE_TWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                likedTwits: action.payload,
            };

        case LIKE_TWEETS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                like: action.payload,
            };

         case TWEET_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                twits: state.twits.filter(
                    (twit) => twit.id !== action.payload
                ),
            };
        
        case RETWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                retwit: action.payload,
            };

        case FIND_TWEET_BY_ID_SUCCESS:
        case REPLY_TWEETS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                twit: action.payload,
            };
            
    
        default:
           return state;
    }

}
