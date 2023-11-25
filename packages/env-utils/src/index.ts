import nx from '@jswork/next';
import '@jswork/next-json';

const prefixedEnv = (inPrefix: string, inEnv: any) => {
  const key = inPrefix.toUpperCase();
  const result: Record<string, any> = {};
  for (const envKey in inEnv) {
    const value = inEnv[envKey];
    if (envKey.toUpperCase().startsWith(key)) {
      result[envKey] = nx.parse(value);
    }
  }
  return result;
};

export { prefixedEnv };
