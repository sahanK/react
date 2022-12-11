import Article from "./Article";

type Props = {
  newsResponse: NewsResponse;
};

const NewsList = ({ newsResponse }: Props) => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
      {
        newsResponse.data.map((article) => (
          <Article key={article.title} article={article} />
        ))
      }
    </main>
  );
};

export default NewsList;
