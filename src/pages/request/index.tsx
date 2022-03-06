import { user } from '@/services/test';
import { useMount } from 'ahooks';
import React, { useState } from 'react';
export default function () {
  const [get, setGet] = useState<string>('');
  useMount(() => {
    user().then((res) => {
      console.log('user', res);
      setGet(JSON.stringify(res));
    });
  });
  return (
    <div>
      网络请求-demo
      <div>{get}</div>
    </div>
  );
}
