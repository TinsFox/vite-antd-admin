import axios from 'axios';

const HOST = '127.0.0.1';

interface ResponseType<T = unknown> {
  code: number;
  msg: string;
  data: T;
}

export async function get<R = any, P = unknown>(api: string, params?: P) {
  try {
    const response = await axios.get<ResponseType<R>>(`${HOST}/${api}`, {
      params: params,
      headers: {
        'content-type': 'application/json',
      },
    });
    if (response.status === 200) {
      const { code, msg, data } = response.data;
      if (code !== 0) {
        throw new Error(msg);
      }
      return data;
    } else {
      throw new Error('网络异常');
    }
  } catch (e) {
    /*
     * 网络异常
     * 自定义错误消息
     * axios异常消息
     **/
    throw e;
  }
}
