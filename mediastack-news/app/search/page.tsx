import fetchNews from "../../utils/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className='font-serif text-4xl mx-10'>
        Search results for:
        <span className='font-bold underline decoration-6 decoration-orange-400'> {searchParams?.term}</span>
      </h1>
      <NewsList newsResponse={news} />
    </div>
  );
};

export default SearchPage;