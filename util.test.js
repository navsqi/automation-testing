// Kita tidak ingin hit API saat tes,
// maka dari itu kita buatlah yang dinamakan dengan mock
// dengan mocks kita me-return sebuah object yang menirukan behavior dari output API yang sesungguhnya
// karena kita tidak ingin hit API, tapi yg kita inginkan hanya
// test function nya saja yang merubah tulisan lowercase => upper case
// dalam hal ini berarti mocks digunakan dalam unit testing

jest.mock('./http');

const { loadTitle } = require('./util');

test('should print an upper case', () => {
  loadTitle().then((title) => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});
