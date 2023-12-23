/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  const res = [];
  value.forEach((ele) => {
    if (Array.isArray(ele)) {
      res.push(...flatten(ele));
    } else {
      res.push(ele);
    }
  });
  return res;
}
