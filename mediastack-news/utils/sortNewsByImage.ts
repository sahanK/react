const sortNewsByImage = (news: NewsResponse) => {
  const newsWithImage = news.data.filter((article) => article.image !== null);
  const newsWithoutImage = news.data.filter((article) => article.image === null);
  const sortedNewsResponse = {
    ...news,
    data: [...newsWithImage, ...newsWithoutImage],
  };
  return sortedNewsResponse;
};

export default sortNewsByImage;