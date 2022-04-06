import React, { useEffect, useState } from 'react';


function Inner() {
  return (
    <div>Inner</div>
  );
}

export default function Fetcher() {
  const [text, setText] = useState('');
  const [shown, setShown] = useState(false);

  useEffect(() => {
    fetch('http://localhost:7777')
      .then(res => res.json())
      .then((d) => {
        setShown(() => true);
        setText(() => d?.hello || '');
      });
  }, []);
  
  return (
    <div>
      <div>...???</div>
      {shown && (
        <Inner />
      )}
    </div>
  )
}