import { getPageData } from "@/lib/contentful/getPage";
import Carousel from "@/components/carousel";

export default async function ProductsPage() {
  const page = await getPageData("/products");

  if (!page) return <p>Page not found</p>;
  return (
    <main>
      <header>
        <img src="/images/moneybox.svg" alt="Moneybox" />
      </header>

      <Carousel categories={page.categories}></Carousel>
    </main>
  );
}
