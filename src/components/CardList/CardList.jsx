import './CardList.css';
import CardItem from "../cardItem/CardItem";
import Loader from '../loader/loader';


export const CardList = ({ juegos, containerStyles, loading = false }) => (
  <>
    {loading ? (
      <Loader />
    ) : (
      <div className="card-grid ">
        {juegos.map((game) => (
          <CardItem 
          key={game.id}
          id={game.id}
          img={game.img}
          category={game.category}
          title={game.title}
          price={game.price}/>
        ))}
      </div>
    )}
  </>
);
