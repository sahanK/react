import { categories } from "../utils/constants";
import fetchNews from "../utils/fetchNews";
import NewsList from "./NewsList";
import response from '../response.json';

const HomePage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(','));

  console.log(news);

  return (
    <div>
      <NewsList newsResponse={news} />
    </div>
  );
};

export default HomePage;