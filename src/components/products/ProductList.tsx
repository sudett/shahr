"use client";

import { Product } from "@/types/product.types";
import ProductItem from "./ProductItem";
import SearchBox from "../ui/SearchBox";
import { useSearch } from "@/hooks/useSearch";

function ProductList({ products }: { products: Product[] }) {
  const { search, searchStr } = useSearch();

  return (
    <article className="border-r pr-4">
      <SearchBox
        placeholder="Search products"
        search={search}
        value={searchStr}
      />
      <ul className="flex flex-col gap-8">
        {products
          .filter((product) =>
            product.title.toLocaleLowerCase().includes(searchStr)
          )
          .map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
      </ul>
    </article>
  );
}

export default ProductList;
