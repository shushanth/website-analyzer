/**
 * @author: shushanth
 * @description: general constants
 */

// regex for full url match
export const URL_MATCH_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

export const ERROR_CONFIG = {
  "INVALID_URL": "Invalid URL, please provide proper full URL.",
  "EMPTY_URL": "Please provide full URL"
};
// as the service API
const ANALYZER_API = "api/urlAnalyzer";

// API URL
export const ANALYZER_API_URL = `${document.URL}${ANALYZER_API}`;
