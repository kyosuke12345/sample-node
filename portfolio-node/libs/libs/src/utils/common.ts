export const TYPEORM_DATE_FORMAT = 'yyyy-MM-dd';

export function isLocal(): boolean {
  const env = process.env.NODE_ENV ?? 'local';
  if (env === 'local') {
    return true;
  } else {
    return false;
  }
}
