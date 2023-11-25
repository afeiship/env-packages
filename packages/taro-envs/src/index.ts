declare var wx: any;

const PREFIX = 'TARO_APP_';

class TaroEnvs {
  public static get(inKey: string): any {
    const key = inKey.toUpperCase();
    const hasPrefix = key.startsWith(PREFIX);
    return hasPrefix ? process.env[key] : process.env[`${PREFIX}${key}`];
  }
}

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = TaroEnvs;
}

export default TaroEnvs;
