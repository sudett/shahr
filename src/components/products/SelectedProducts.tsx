"use client";

import { removeProduct } from "@/store/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";
import SearchBox from "../ui/SearchBox";
import { useSearch } from "@/hooks/useSearch";

function SelectedProducts() {
  const { selectedProducts } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const { search, searchStr } = useSearch();

  return (
    <article>
      <SearchBox placeholder="Search Selected Products" search={search} />
      <ul className="flex flex-col gap-4">
        {selectedProducts
          .filter((selectedProduct) =>
            selectedProduct.title.toLocaleLowerCase().includes(searchStr)
          )
          .map((selectedProduct) => (
            <li
              key={selectedProduct.id}
              onClick={() => dispatch(removeProduct(selectedProduct.id))}
              className="cursor-pointer"
            >
              {selectedProduct.title}
            </li>
          ))}
      </ul>
    </article>
  );
}

export default SelectedProducts;
