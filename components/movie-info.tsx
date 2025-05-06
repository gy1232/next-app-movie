import Link from 'next/link';
import styles from '../styles/components-styles/movie-info.module.css';
import { API_URL } from '../app/contants';

export const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <p className={styles.title}>
          {movie.title} {movie.aadult ? <span>19</span> : null}
        </p>

        <p>⭐️{movie.vote_average.toFixed(1)}</p>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={'_blank'}>
          Homepage &rarr;
        </a>
        <Link href={`/movies/${id}/similar`}>Similar &rarr;</Link>
      </div>
    </div>
  );
};

export default MovieInfo;
