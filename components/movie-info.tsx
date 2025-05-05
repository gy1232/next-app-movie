import { API_URL } from '../app/(home)/page';

const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return <div>{JSON.stringify(movie)}</div>;
};

export default MovieInfo;
