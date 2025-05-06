import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface IParams {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
};

const MovieDetailPage = async ({ params: { id } }: IParams) => {
  return (
    <div>
      <Suspense fallback={<div>Loading movie info</div>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading movie videos</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetailPage;
