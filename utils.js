const subtract = (x, y) => {
  return x - y;
};

const add = (x, y, cb) => {
  if (x.match(/^\d+$/) && y.match(/^\d+$/)) {
    return cb(null, Number(x) + Number(y));
  } else {
    return cb(true, 'Error! harus angka!');
  }
};

module.exports = {
  subtract,
  add,
};
