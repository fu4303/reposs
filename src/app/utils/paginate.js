/**
 * Here we're creating a paginated array
 * which in fact is a two-dimensional holding 10 objects each
 *
 * @param {Array} repos
 */

/**
 * @param {Array} arr
 * @param {Number} size
 */
const paginate = (arr = [], size = 10) => {
  if (arr.length === size) {
    return arr;
  } else {
    // A mutable number to track the size of the mutablePaginatedArray
    let mutableSize = 0;
    // The paginated array that is going to be returned
    let paginatedArray = [];
    // The array that will hold all the objects that will be pushed to paginatedArray
    let mutablePaginatedArray = [];

    // Looping through the array
    arr.forEach((sub) => {
      if (mutableSize < size) {
        // Pusing the object
        mutablePaginatedArray.push(sub);
        // Incrementing the size
        mutableSize++;
      } else {
        // Pushing the mutablePaginatedArray with all of the objects to our main array
        paginatedArray.push(mutablePaginatedArray);
        // Emptying the mutable array
        mutablePaginatedArray = [];
        // Setting the size to 0
        mutableSize = 0;
      }
    });

    // Returing the array
    return paginatedArray;
    /**
     * The default result will be
     *
     *    [
     *        [...], <- contains 10 objects
     *        [...]  <- contains 10 objects
     *        etc.
     *    ]
     */
  }
};

export { paginate };
