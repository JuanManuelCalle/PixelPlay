import './CardList.css';
import CardItem from "../cardItem/CardItem";


export const CardList = ({ style,juegos, containerStyles }) => (
  <div className="item-list" style={containerStyles}>
    {juegos.map((game) => (
      <CardItem 
      style= {style}
      key={game.id}
      id={game.id}
      img={game.img}
      category={game.category}
      title={game.title}
      price={game.price}/>
    ))}
  </div>
);
