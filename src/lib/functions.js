/**
 *
 * @param index
 * @param indexs
 * @param menus
 * @returns {Array}
 */
export function getCurrentMenu(index, indexs, menus) {
  let ret = [], fArr = [].concat(menus), sArr = fArr.reduce((res, item) => {
    res = res.concat(item.subs || []);
    return res;
  }, []), arr = [fArr, sArr];

  ret = indexs.map((item, index) => {
    let searchArr = arr[index],
      i = searchArr.findIndex((res) => {
        return res.value == item;
      });
    return searchArr[i];
  })
  return ret;
}

/**
 *
 * @param arr
 * @param fun
 * @returns {boolean}
 */
export function findInArray(arr, fun) {
  let index = arr.findIndex(fun);
  return index >= 0 ? arr[index] : false;
}
