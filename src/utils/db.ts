/**
 * Returns realtime database path for user's profile node
 *
 * @param {string} userId - uid
 * @returns {string}
 */
export function getUserProfilePath(userId: string): string {
  return "users/" + userId + "/profile";
}
