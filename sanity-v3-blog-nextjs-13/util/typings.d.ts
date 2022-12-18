type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface RootObject {
  ms: number;
  query: string;
  result: Result[];
};

interface Post extends Base {
  author: Author;
  body: Body[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
};

interface Category extends Base {
  description: string;
  title: string;
};

interface Author extends Base {
  bio: Bio[];
  image: Image;
  name: string;
  slug: Slug;
};

interface Image {
  _type: string;
  asset: Asset;
};

interface Slug {
  _type: string;
  current: string;
};

interface Bio {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
};

interface Asset {
  _ref: string;
  _type: string;
};

interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
};

interface Body {
  _key: string;
  _type: string;
  children: BodyChild[];
  markDefs: MarkDef[];
  style: string;
  level?: number;
  listItem?: string;
};

interface MarkDef {
  _key: string;
  _type: string;
  href: string;
};

interface BodyChild {
  _key: string;
  _type: string;
  marks: string[][];
  text: string;
};