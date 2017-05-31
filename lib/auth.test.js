const auth = require('./auth');
test('No Parameters', () => {
    expect(auth({})).toMatchObject({code: -1, message: 'Missing \'key\' and \'secret\' parameter'});
});

test('See if returnBalances would work', () => {
  expect(auth({key: 'testkey', secret: 'testsecret', postdata: 'command=returnBalances&nonce=1'})).toMatchObject({'postData': 'command=returnBalances&nonce=1', 'headers': {'Key': 'testkey', 'Sign': '364a0b8d263f29837dc4b3a1011a27842d5c94cdea29bfbdc7346003eef24ae3cc35c639422570efa3ad0c33321f64aeeafc4e9eadb5f9e727a188e329a8a6a0'}});
});

test('See if returnDepositAddresseswould work', () => {
  expect(auth({key: 'testkey', secret: 'testsecret', postdata: 'command=returnDepositAddresses&nonce=1'})).toMatchObject({'postData': 'command=returnDepositAddresses&nonce=1', 'headers': {'Key': 'testkey', 'Sign': '50ab1070bc0220e09aeec3975a16ce08932afc53505d60d4090f885f1f15036a3e7cd4cec4383b07e0cdbac3963d2d0bad414fc0d1e319ccaa8f28cdbd8c2e6b'}});
});

test('See if generateNewAddress work', () => {
  expect(auth({key: 'testkey', secret: 'testsecret', postdata: 'command=generateNewAddress&currency=BTC&nonce=1'})).toMatchObject({'postData': 'command=generateNewAddress&currency=BTC&nonce=1', 'headers': {'Key': 'testkey', 'Sign': '834faf60ebcc0f9b269fbe3a8da0d679bf8471eb00d3377be54532f7c54754f12185aff7da7868c050f0fde49b368fd45ff7b879c6b4f47df511fe31943a47c9'}});
});
