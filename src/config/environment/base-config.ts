
import { bool, cleanEnv, num, str } from 'envalid';

export const baseConfig = cleanEnv(process.env, {
  DB_USER: str(),
  DB_PASSWORD: str(),
  DB_HOST: str(),
  DB_PORT: num(),
  DB_SCHEMA: str(),
});
