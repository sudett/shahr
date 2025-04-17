import { getProducts } from "@/services/productService";
import { Product } from "@/types/product.types";
import ProductItem from "./ProductItem";

async function ProductList() {
  const { data: products }: { data: Product[] } = await getProducts();

  return (
    <article className="border-r pr-4">
      <h2 className="font-bold text-lg pb-8 cursor-pointer">Products</h2>
      <ul className="flex flex-col gap-8">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </article>
  );
}

export default ProductList;
