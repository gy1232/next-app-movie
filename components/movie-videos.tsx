import { API_URL } from '../app/(home)/page';

const getVideos = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return <div>{JSON.stringify(videos)}</div>;
};

export default MovieVideos;
