
const Card = ({ imageSrc, title, content }) => {
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', maxWidth: '300px' }}>
        <img src={imageSrc} alt="Card" style={{ width: '100%', marginBottom: '12px', borderRadius: '4px' }} />
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  };

  export default Card