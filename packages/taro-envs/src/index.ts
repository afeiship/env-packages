import EnvManager from '@jswork/env-manager';

declare var wx: any;

const taroEnv = new EnvManager({
  prefix: 'TARO_',
  env: process.env,
  harmony: true,
});

class TaroEnvs {
  public static get(inKey?: string): any {
    return taroEnv.get(inKey);
  }
}

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = TaroEnvs;
}

export default TaroEnvs;
