import { prefixedEnv } from '../src';

describe('api.basic', () => {
  beforeEach(() => {
    process.env.VITE_ENV_ID = 'aric.afeiship';
    process.env.VITE_ENV_COUNT = '12';
    process.env.VITE_ENV_IS_ARIC = 'false';
    process.env.VITE_ENV_DATA = '{"name":"afei"}';
  });

  test('api: prefixedEnv support string/number/boolean/json value', () => {
    const envs = prefixedEnv('VITE_ENV', process.env);
    expect(envs).toEqual({
      VITE_ENV_ID: 'aric.afeiship',
      VITE_ENV_COUNT: 12,
      VITE_ENV_IS_ARIC: false,
      VITE_ENV_DATA: { name: 'afei' },
    });
  });
});
