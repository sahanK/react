import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/util/sanity.client";
import urlFor from "@/util/urlFor";
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export const generateStaticParams = async () => {
  const query = groq`*[_type=='post']
  {
    slug
  }
  `;
  
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slugRoute) => ({
    slug: slugRoute
  }));
};

const Post = async ({params: { slug }}: Props) => {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className='px-10 pb-26'>
      <section className='space-y-2 border border-[#F7AB0A] text-white mb-4'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm
          p-10'>
          <Image 
            className='object-cover object-center mx-auto'
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
          </div>

          <section className='p-5 bg-[#F7AB0A] w-full'>
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className='text-4xl font-extrabold'>{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString
                  (
                    'en-us', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    }
                  )}
                </p>
              </div>
              <div className='flex items-center space-x-2'>
                <Image 
                  className='rounded-full'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className='w-64'>
                  <h3 className='text-lg fonr-bold'>{post.author.name}</h3>
                  <div>
                    {/* TODO: Author bio */}
                  </div>
                </div>
              </div>
            </div>


            <div>
              <h2 className='italic pt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ad nam cum quibusdam natus.
                Et magni ipsum sint sit perspiciatis nisi eos ullam.
                Deleniti delectus magnam unde cum eum amet minus.
              </h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {
                  post.categories.map((category) => (
                    <div key={category._id} className='bg-gray-800 text-center text-white
                    px-3 py-1 rounded-full text-sm font-semibold'>
                      {category.title}
                    </div>
                  ))
                }
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
};

export default Post;