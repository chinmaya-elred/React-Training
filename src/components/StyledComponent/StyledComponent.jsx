import React , { useState } from 'react';
import './StyeldComponent.css';

const StyeldComponent = () => {
    const [paragraphColor, setParagraphColor] = useState('black');

    const dynamicColor = 'blue';
    const fontSize = '24px';

    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f8f8f8',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          },
          header: {
            fontSize: '36px',
            color: 'blue',
            textAlign: 'center',
          },
          button: {
            padding: '10px 20px',
            fontSize: '24px',
            backgroundColor: 'blue',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '20px',
          },
          paragraph: {
            color: paragraphColor ,
            fontSize: '18px',
          },
    };

    
    const handleButtonClick = () => {
        setParagraphColor('red');
    };

    return (
        <div style={styles.container} className="big-example-container">
            <h1 style={styles.header}>Styling in React Example</h1>
            <p className="custom-paragraph" style={styles.paragraph}>
                This is a paragraph with custom styling.
            </p>
            <p className="custom-paragraph" style={styles.paragraph}>
                Another paragraph with custom styling.
            </p>
            <button style={styles.button} onClick={handleButtonClick}>
                Change Paragraph Color
            </button>
        </div>
    );
};

export default StyeldComponent;
