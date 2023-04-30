/**
 * Returns realtime database path for user's profile node
 *
 * @param {string} userId - uid
 * @returns {string}
 */
function getUserProfilePath(userId: string): string {
  return "users/" + userId + "/profile";
}

const DB_UTILS = {
  getUserProfilePath,
};

export default DB_UTILS;
