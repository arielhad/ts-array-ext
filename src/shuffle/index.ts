import "../sortByAttr";

declare global {
  interface Array<T> {
    /**
     * Shorthand for shuffling an array.
     *
     * Examples:
     * ```typescript
     * const randomMyArr = myArr.shuffle();
     * ```
     */
    shuffle(thisArg?: any[]): T[];
  }
}

Array.prototype.shuffle = function (thisArg = this) {
  return thisArg
    .map(val => ({
      //This magical random is considered more random than the standard Math.random().
      //https://stackoverflow.com/a/59735724/6103188
      sort: Math.floor(1e14 * Math.random() ** 2) % (thisArg.length * 100),
      val
    }))
    .sortByAttr(x => x.sort)
    .map(x => x.val);
};
