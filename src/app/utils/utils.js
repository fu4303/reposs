/**
 * Here we're creating a paginated array
 * which in fact is a two-dimensional holding 10 objects each
 *
 * @param {Array} repos
 */

const paginateRepos = (repos = [], size = 10) => {
  let index = 0;
  let paginatedRepos = [];

  do {
    let _size = 0;
    let _paginatedRepos = [];

    do {
      _paginatedRepos.push(repos[_size]);
      _size++;
    } while (_size < size && _size !== size);

    paginatedRepos.push(_paginatedRepos);
    index++;
  } while (index < repos.length);

  return paginatedRepos;
  // The result will be
  /**
   * [
   *    [...], <- contains 10 objects
   *    [...]  <- contains 10 objects
   *    etc.
   * ]
   */
};

export { paginateRepos };
