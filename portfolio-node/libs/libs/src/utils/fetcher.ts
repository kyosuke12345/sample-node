import { isLocal } from './common';
import {
  isNullOrUndefined,
  isNumber,
  isString,
  isUndefined,
} from './typeguard';

import fetch, {
  Response,
  RequestInfo,
  RequestInit,
  HeaderInit,
} from 'node-fetch';

/** エラー情報 */
export class FetchError extends Error {
  /** ステータス */
  status: number;
  /** 理由 */
  reason: unknown;

  constructor(status: number, reason: unknown) {
    super();
    this.status = status;
    this.reason = reason;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

const wrap = <T>(task: Promise<Response>): Promise<T> => {
  return new Promise((resolve, reject) => {
    task
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((json) => {
              // jsonが取得できた場合だけresolve
              resolve(json);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const fetcher = <T = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T> => {
  return wrap<T>(fetch(input, init));
};

type Params = Record<
  string,
  string | number | Array<string | number | undefined>
>;

export async function get<T = unknown>(
  url: string,
  params: Params,
  headers?: HeaderInit,
): Promise<T | FetchError> {
  const urlObj = new URL(url);
  const searchParams = new URLSearchParams(urlObj.search);
  searchParams.append('nocache', new Date().getTime().toString());
  try {
    Object.entries(params).forEach(([key, value]) => {
      if (isString(value)) {
        searchParams.append(key, value);
      } else if (isNumber(value)) {
        searchParams.append(key, value.toString());
      } else if (Array.isArray(value)) {
        if (!key.endsWith('[]')) {
          key += '[]';
        }

        for (const v of value) {
          if (isString(v)) {
            searchParams.append(key, v);
          } else if (isNumber(v)) {
            searchParams.append(key, v.toString());
          } else {
            console.error('invalid params in ' + key);
            return new FetchError(400, `invalid params in ${key}`);
          }
        }
      } else if (!isNullOrUndefined(value)) {
        console.error('invalid params in ' + key);
        return new FetchError(400, `invalid params in ${key}`);
      }
    });
  } catch (e) {
    return new FetchError(400, e);
  }

  urlObj.search = searchParams.toString();

  const init: RequestInit = {
    method: 'GET',
    headers: !isUndefined(headers)
      ? headers
      : {
          'Content-Type': 'application/json',
        },
  };

  if (isLocal()) {
    console.log(url, init);
  }

  return fetcher<T>(urlObj.toString(), init);
}

/**
 * HTTP POST
 * @typeParam T レスポンス型
 * @param url 対象URL
 * @param params パラメーター(JSON Body)
 * @param success 成功時コールバック
 * @param failure 失敗時コールバック
 * @param isTFunc レスポンスがTかどうか
 */
export async function post<T = unknown>(
  url: string,
  params: unknown,
  header?: HeaderInit,
): Promise<T | FetchError> {
  const urlObj = new URL(url);
  const searchParams = new URLSearchParams(urlObj.search);
  // searchParams.append('nocache', new Date().getTime().toString());
  urlObj.search = searchParams.toString();
  let json: string;
  try {
    json = JSON.stringify(params);
  } catch (error) {
    console.error(`params can't parse to json(${error})`);
    return new FetchError(400, 'params can not json parse');
  }

  const init: RequestInit = {
    method: 'POST',
    headers: !isUndefined(header)
      ? header
      : {
          'Content-Type': 'application/json;charset=UTF-8',
        },
    body: json,
  };

  if (isLocal()) {
    console.log('url:' + urlObj.toString(), init);
  }

  return fetcher<T>(urlObj.toString(), init);
}

export async function nodeFetch(
  url: string,
  init?: RequestInit,
): Promise<Response> {
  return fetch(url, init);
}
