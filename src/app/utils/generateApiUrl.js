/**
 *
 * @param {Number} stars
 * @param {"desc"|"asc"} order
 * @param {Number} per_page
 * @param {"stars"|"forks"|"watchers"} sortBy
 * @returns
 */

export const generateApiUrl = (
  stars = 1000,
  order = "desc",
  per_page = 50,
  sortBy = "star"
) => {
  return `https://api.github.com/search/repositories?q=stars:>=${stars}&sort=${sortBy}&order=${order}&per_page=${per_page}`;
};
