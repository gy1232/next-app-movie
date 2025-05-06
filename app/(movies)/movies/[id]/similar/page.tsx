import styles from '../../../../../styles/pages-styles/similar.module.css';
import { getMovie } from '../../../../../components/movie-info';
import API_URL from '../../../../../lib/contants';

type PageParams = Promise<{ id: string }>;

const getSimilar = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
};

const SimilarPage = async ({ params }: { params: PageParams }) => {
  const { id } = await params;
  const similars = await getSimilar(id);
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt="" />
      <div className={styles.similar}>
        {similars.map((similar) => (
          <div>
            <img src={similar.poster_path} alt={similar.title} />
            <p>{similar.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarPage;
