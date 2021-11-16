/*
 * A util function to create an object with the same keys and values
 * @param {[]String|Object} config
 */
export const createMirrorObject = (config = []) => {
  let mirror = {};
  let propertyNames = Array.isArray(config) ? config : Object.keys(config);
  for (let prop of propertyNames) {
    mirror[prop] = prop;
  }

  return mirror;
};
