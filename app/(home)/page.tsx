import Movie from '../../components/movie';
import styles from '../../styles/pages-styles/home.module.css';

export const metadata = {
  title: 'Home',
};

const getMovies = async () => {
  const response = await fetch(API_URL);
  const json = response.json();
  return json;
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const HomePage = async () => {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default HomePage;
