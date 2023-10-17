import React, { useState } from 'react';

const Memo = () => {
  const [memos, setMemos] = useState([]);
  const [newMemo, setNewMemo] = useState('');

  const addMemo = () => {
    if (newMemo.trim() !== '') {
      setMemos([...memos, newMemo]);
      setNewMemo('');
    }
  };

  return (
    <div>
      <h1>Memo App</h1>
      <div>
        <input
          type="text"
          value={newMemo}
          onChange={(e) => setNewMemo(e.target.value)}
          placeholder="Write a new memo..."
        />
        <button onClick={addMemo}>Add Memo</button>
      </div>
      <ul>
        {memos.map((memo, index) => (
          <li key={index}>{memo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Memo;
