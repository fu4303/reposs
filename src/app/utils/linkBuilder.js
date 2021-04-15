/**
 *
 *
 * @param {Number} stars
 * @param {"desc"|"asc"} order
 * @param {Number} per_page
 * @param {"stars"|"forks"|"watchers"} sortBy
 * @returns
 */

export const linkBuilder = (
  query = "",
  stars = 1000,
  order = "desc",
  per_page = 20,
  sortBy = "stars"
) => {
  return `https://api.github.com/search/repositories?q=${
    query && query + "&"
  }stars:>=${stars}&sort=${sortBy}&order=${order}&per_page=${per_page}`;
};