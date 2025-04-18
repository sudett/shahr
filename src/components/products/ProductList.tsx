"use client";

import { Product } from "@/types/product.types";
import ProductItem from "./ProductItem";
import SearchBox from "../ui/SearchBox";
import { useSearch } from "@/hooks/useSearch";
import { useLoadMoreItems } from "@/hooks/useProducts";

function ProductList({ products }: { products: Product[] }) {
  const { search, searchStr } = useSearch();
  const { finalProducts, hasMore, moreItemsElementRef } =
    useLoadMoreItems(products);

  return (
    <article className="lg:border-r lg:pr-4 col-span-2 lg:col-span-1">
      <SearchBox
        placeholder="Search products"
        search={search}
        value={searchStr}
      />
      <ul className="flex flex-col gap-8">
        {finalProducts
          .filter((product) =>
            product.title.toLocaleLowerCase().includes(searchStr)
          )
          .map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
      </ul>
      {hasMore && <div ref={moreItemsElementRef}>Load more items ...</div>}
    </article>
  );
}

export default ProductList;
