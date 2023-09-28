import Card from "./Card";

const CardList = () => {
    const cardData = [
      {
        imageSrc: 'https://placekitten.com/300/200',
        title: 'Card 1',
        content: 'This is the content for Card 1.',
      },
      {
        imageSrc: 'https://placekitten.com/300/201',
        title: 'Card 2',
        content: 'This is the content for Card 2.',
      },
      {
        imageSrc: 'https://placekitten.com/300/202',
        title: 'Card 3',
        content: 'This is the content for Card 3.',
      },
    ];
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default CardList;