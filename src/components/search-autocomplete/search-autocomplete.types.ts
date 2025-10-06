type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type SearchResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type SearchResult = Pick<
  Product,
  "id" | "title" | "price" | "thumbnail"
>;
