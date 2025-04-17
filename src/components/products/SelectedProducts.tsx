"use client";

import { removeProduct } from "@/store/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";

function SelectedProducts() {
  const { selectedProducts } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  return (
    <article>
      <h2 className="font-bold text-lg pb-8 cursor-pointer">
        Selected Products
      </h2>
      <ul className="flex flex-col gap-4">
        {selectedProducts.map((selectedProduct) => (
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
