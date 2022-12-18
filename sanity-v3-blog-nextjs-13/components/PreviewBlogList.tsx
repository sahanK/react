'use client';

import { usePreview } from "@/util/sanity.preview";
import BlogList from "./BlogList";

type Props = {
  query: string;
};

const PreviewBlogList = ({ query }: Props) => {
  const posts = usePreview(null, query);
  console.log('LOADING POSTS...', posts);

  return <BlogList posts={posts} />;
};

export default PreviewBlogList;