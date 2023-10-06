import React from 'react';

const DynamicScriptLoad = () => {
  const loadExternalScript = () => {
    const script = document.createElement('script');
    script.src = 'https://example.com/external-script.js';
    script.defer = true;

    script.onload = () => {
     alert('External script loaded');
    };

    document.body.appendChild(script);
  };

  return (
    <div>
      <h1>Dynamic Script Load Example</h1>
      <button onClick={loadExternalScript}>Load External Script</button>
    </div>
  );
};

export default DynamicScriptLoad;
