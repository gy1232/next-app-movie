import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

type PageParams = Promise<{ id: string }>;

export const generateMetadata = async ({ params }: { params: PageParams }) => {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
};

const MovieDetailPage = async ({ params }: { params: PageParams }) => {
  const { id } = await params;
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
