import { useState } from 'react';

export const useSort = (obj: { [key: string]: number }) => {
  const [sortMethod, setSortMethod] = useState<'asc' | 'desc' | 'none'>('asc');
  const [sortedArr, setSortedArr] = useState<string[]>(Object.keys(obj));

  const onSort = (type: 'string' | 'number') => {
    let arr = [];
    switch (sortMethod) {
      case 'asc':
        arr =
          type === 'string'
            ? Object.keys(obj).sort((a, b) => a.localeCompare(b))
            : Object.keys(obj).sort((a, b) => (obj[a] || 0) - (obj[b] || 0));
        setSortedArr(arr);
        setSortMethod('desc');
        break;
      case 'desc':
        arr =
          type === 'string'
            ? Object.keys(obj).sort((a, b) => b.localeCompare(a))
            : Object.keys(obj).sort((a, b) => (obj[b] || 0) - (obj[a] || 0));
        setSortedArr(arr);
        setSortMethod('none');
        break;
      case 'none':
        arr = Object.keys(obj);
        setSortedArr(arr);
        setSortMethod('asc');
        break;
      default:
        break;
    }
  };

  return [sortedArr, onSort] as [string[], (type: 'string' | 'number') => void];
};
