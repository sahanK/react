'use client';

import { notFound, useSearchParams } from 'next/navigation';
import LiveTimeStamp from '../LiveTimeStamp';

const ArticlePage = () => {
  // Server component searchParams not working once build
  const searchParams = useSearchParams();

  if(
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  };

  const article: Article = {
    author: searchParams.get('author')!,
    title: searchParams.get('title')!,
    description: searchParams.get('description')!,
    url: searchParams.get('url')!,
    source: searchParams.get('source')!,
    image: searchParams.get('image'),
    category: searchParams.get('category')!,
    language: searchParams.get('language')!,
    country: searchParams.get('country')!,
    published_at: searchParams.get('published_at')!,
  };

  return (
    <article>
      <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-10'>
        {article.image && (
          <img
            className='h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl
            object-cover rounded-lg shadow-md'
            src={article.image}
            alt={article.title}  
          />
        )
        }
        <div className='px-10'>
          <h1 className='headerTitle px-0 no-underline pb-2'>
            {article.title}
          </h1>
          <div className='flex divide-x-2 space-x-4'>
            <h2 className='font-bold'>By: {article.author}</h2>
            <h2 className='font-bold pl-4'>Source: {article.source}</h2>
            <span className='pl-4'>

              <LiveTimeStamp time={article.published_at} />
            </span>
          </div>
          <p className='pt-4'>{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
