'use client';

import Link from 'next/link';
import styles from '../styles/components-styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface IMovieProps {
  id: string;
  title: string;
  poster_path: string;
}

const Movie = ({ id, title, poster_path }: IMovieProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie} key={id} onClick={onClick}>
      <img src={poster_path} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;
