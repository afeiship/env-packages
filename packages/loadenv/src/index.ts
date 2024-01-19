import dotenv from 'dotenv';
import path from 'path';

interface ILoadenvOptions {
  cwd?: string;
  absolute?: boolean;
  files?: string | string[];
}

const defaults = {
  cwd: '',
  absolute: false,
  files: ['.env', '.env.local'],
};

const loadenv = (inOptions: ILoadenvOptions) => {
  const { absolute, files, cwd } = { ...defaults, ...inOptions };
  const parsed: any[] = [];
  const envfiles = typeof files === 'string' ? [files] : files;
  const cwdDir = absolute ? '' : process.cwd();

  for (let i = 0; i < envfiles.length; i++) {
    const envFile = path.resolve(cwdDir, cwd, envfiles[i]);
    const envs = dotenv.config({ path: envFile }).parsed;
    parsed.push(envs);
  }

  const result = Object.assign({}, ...parsed);

  Object.keys(result).forEach((key) => {
    let value = result[key];
    try {
      value = JSON.parse(value);
    } catch (e) {}
    result[key] = value;
  });

  return result;
};

export default loadenv;
