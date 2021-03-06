import keyMirror from 'keymirror';

export const ACTIONS = keyMirror({
  OPEN_MODAL: null,
  CLOSE_MODAL: null,
  SET_CURRENT_USER: null,
  SET_CURRENT_USER_FAIL: null,
  REMOVE_CURRENT_USER_ERROR: null,
  LOGOUT_USER: null,
  RESET_PASSWORD_STATE: null,
  RESET_PASSWORD_SUCCESS: null,
  RESET_PASSWORD_FAILED: null,
  RESET_PASSWORD_ERROR: null,
  UPDATE_PASSWORD_SUCCESS: null,
  UPDATE_PASSWORD_FAILED: null,
  UPDATE_PASSWORD_ERROR: null,
  GET_ARTICLE_COMMENT: null,
  GET_ERRORS: null,
  NOTIFICATION_LOADER: null,
  DATA_LOADING_COMMENT: null,
  DATA_LOADING_REPLY: null,
  POST_ARTICLE_COMMENT: null,
  ARCHIVE_COMMENT: null,
  GET_COMMENT_REPLY: null,
  POST_COMMENT_REPLY: null,
  ARCHIVE_COMMENT_REPLY: null,
  SUCCESS_COMMENT: null,
  SET_AUTH_USER: null,
  SUBSCRIBE_TO_NOTIFICATION: null,
  UNSUBSCRIBE_TO_NOTIFICATION: null,
  CHECK_SUBSCRIPTION: null,
  GET_USER_NOTIFICATION: null,
  TOGGLE_NOTIFICATION_READ: null,
  USER_INSTANT_NOTIFICATION: null,
  GET_ARTICLES_BY_PAGE: null,

  FOLLOW_USER: null,
  UNFOLLOW_USER: null,
  GET_ALL_FOLLOWERS: null,
  SEARCH_ARTICLES_BY_AUTHOR_SUCCESS: null,
  SEARCH_ARTICLES_BY_AUTHOR_FAILED: null,
  SEARCH_ARTICLES_BY_AUTHOR_ERROR: null,
  SEARCH_ARTICLES_BY_TITLE_SUCCESS: null,
  SEARCH_ARTICLES_BY_TITLE_FAILED: null,
  SEARCH_ARTICLES_BY_TITLE_ERROR: null,
  SEARCH_ARTICLES_BY_TAGS_SUCCESS: null,
  SEARCH_ARTICLES_BY_TAGS_FAILED: null,
  SEARCH_ARTICLES_BY_TAGS_ERROR: null,
  CREATE_ARTICLE: null,
  CREATE_ARTICLE_ERROR: null,
  CREATE_ARTICLE_STATE: null,
  UPDATE_ARTICLE_SUCCESS: null,
  UPDATE_ARTICLE_ERROR: null,
  NEW_ARTICLE: null,
  NEW_ARTICLE_ERROR: null,
  UPDATE_ARTICLES_RESET_STATE: null,
  UPDATE_ARTICLES_SUCCESS: null,
  UPDATE_ARTICLES_ERROR: null,
  GET_ARTICLES_BY_ID_RESET_STATE: null,
  GET_ARTICLES_BY_ID_SUCCESS: null,
  GET_ARTICLES_BY_ID_ERROR: null,
  GET_PROFILE: null,
  GET_ARTICLES_BY_AUTHOR: null,
  ARTICLES_RATING_SUCCESS: null,
  ARTICLES_RATING_ERROR: null,
  RESET_ARTICLES_RATING_STATE: null,
  GET_ARTICLES_RATING_SUCCESS: null,
  GET_ARTICLES_RATING_ERROR: null,
  SET_LOADER: null,
  SET_ERRORS: null,
  CLEAR_ERRORS: null,
  GET_COMMENTS: null,
  GET_COMMENTS_FAIL: null,
  GET_COMMENT_EDIT_HISTORY: null,
  GET_COMMENT_EDIT_HISTORY_FAIL: null,
  REMOVE_AN_ERROR: null,

  FLASH_SUCCESS_MSG: null,

  TOGGLE_LOADER: null,
  TOGGLE_MODAL: null,
  GET_ALL_ARTICLES: null,
  GETTING_PROFILE_ERROR: null,
  LIKE_ARTICLE: null,
  LIKE_ARTICLE_FAIL: null,

  SET_FEATURED_ARTICLES: null,
  SET_MAIN_ARTICLES: null,
  SET_RECENT_ARTICLES: null,
  GET_ALL_UNPUBLISHED_ARTICLES: null,

  GET_ALL_BOOKMARKS: null,
  GET_ALL_BOOKMARKS_ERROR: null,
  CREATE_BOOKMARKS: null,
  CREATE_BOOKMARKS_ERROR: null,
  DELETE_BOOKMARKS: null,
  DELETE_BOOKMARKS_ERROR: null,

  SET_TAGGED_ARTICLES: null,
});
