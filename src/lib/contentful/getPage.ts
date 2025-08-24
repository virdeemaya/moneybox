import { client } from "./client";

type ContentfulSys = {
  id: string;
  [key: string]: unknown;
};

type ContentfulEntry<T = Record<string, unknown>> = {
  sys: ContentfulSys;
  fields: T;
};

type ProductFields = {
  productName: string;
  productDescription: string;
  productImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  productUrl: string;
};

type CategoryFields = {
  categoryName: string;
  products?: ContentfulEntry<ProductFields>[];
};

type PageFields = {
  pageTitle: string;
  pageUrl: string;
  categories: ContentfulEntry<CategoryFields>[];
};

export const getPageData = async (pageUrl: string) => {
  const response = await client.getEntries({
    content_type: "page",
    include: 3,
  });

  if (!response.items.length) return null;

  const page = response.items[0].fields as unknown as PageFields;

  return {
    title: page.pageTitle,
    url: page.pageUrl,
    categories: (page.categories || []).map((category) => ({
      id: category.sys.id,
      name: category.fields.categoryName,
      products: (category.fields.products || []).map((product) => ({
        id: product.sys.id,
        name: product.fields.productName,
        description: product.fields.productDescription,
        image: product.fields.productImage?.fields.file.url || "",
        url: product.fields.productUrl,
      })),
    })),
  };
};
