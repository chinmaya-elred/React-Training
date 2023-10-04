import React, { useState } from 'react';

function ConditionalParagraph() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };

  return (
    <div>
      <button onClick={toggleParagraph}>Toggle Paragraph</button>
      {showParagraph && <p>This paragraph will be rendered conditionally.</p>}
    </div>
  );
}

export default ConditionalParagraph;
