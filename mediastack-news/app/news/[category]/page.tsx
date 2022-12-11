import { categories } from "../../../utils/constants";
import fetchNews from "../../../utils/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: {category: Category};
};

const NewsCategory = async ({params: { category }}: Props) => {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className='font-serif text-4xl mx-10 underline capitalize
      decoration-6 decoration-orange-400'>
        {category}
      </h1>
      <NewsList newsResponse={news} />
    </div>
  );
};

export default NewsCategory;

export const generateStaticParams = async () => {
  return categories.map((category) => ({
    category: category,
  }));
};
