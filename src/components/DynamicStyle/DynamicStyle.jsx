import React, { useState } from 'react';

const DynamicStyleExample = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  const dynamicStyles = {
    backgroundColor: isHighlighted ? '#ffc107' : '#fff', 
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  return (
    <div
      style={dynamicStyles}
      onClick={toggleHighlight}
    >
      Click to {isHighlighted ? 'unhighlight' : 'highlight'}
    </div>
  );
};

export default DynamicStyleExample;
