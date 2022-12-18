import BlogPost from './BlogPost';

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className='border-[#F7AB0A] mb-10' />
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10
      gap-y-16 pb-24'>
        {
          posts.map((post) => <BlogPost post={post} />)
        }
      </div>
    </div>
  );
};

export default BlogList;
