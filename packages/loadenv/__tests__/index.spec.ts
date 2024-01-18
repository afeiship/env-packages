import loadenv from '../src';

describe('api.basic', () => {
  test('01/.env single env file', () => {
    const res = loadenv({ files: '.env', cwd: '__tests__/envfiles' });
    expect(res).toEqual({
      TARO_ID: 'wx.default',
      TARO_HOST: 'https://default.api.51zfgx.com',
      TARO_API_URL: 'https://default.beta.github.com/users/afeiship',
      TARO_ABC: 'abcd',
      TARO_NUMBER: 1,
      TARO_JSON: { name: 'afei', age: 18 }
    })
  });

  test('02/.env,.env.local', () => {
    const res = loadenv({ files: ['.env', '.env.local'], cwd: '__tests__/envfiles' });
    expect(res).toEqual({
      TARO_ID: 'wx.lcoal',
      TARO_HOST: 'https://lcoal.api.51zfgx.com',
      TARO_API_URL: 'https://api.lcoal.github.com/users/afeiship',
      TARO_ABC: 'abcd',
      TARO_NUMBER: 1,
      TARO_JSON: { name: 'afei', age: 18 }
    })
  })
});
