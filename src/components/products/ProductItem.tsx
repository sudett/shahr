"use client";

import { addProduct } from "@/store/productSlice";
import { useAppDispatch } from "@/store/store";
import { Product } from "@/types/product.types";
import Image from "next/image";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

function ProductItem({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  return (
    <li
      onClick={() => dispatch(addProduct(product))}
      className="flex gap-8 h-48 cursor-pointer"
    >
      <Image
        src={product.image}
        width={100}
        height={100}
        alt="clothes picture"
        style={{ objectFit: "fill", backgroundColor: "transparent" }}
      />
      <div className="grid grid-rows-2">
        <div>
          <h3 className="font-semibold pb-1 overflow-hidden text-ellipsis">
            {product.title}
          </h3>
          <p className="text-sm pb-3 text-blue-400">{product.category}</p>
          <div className="flex justify-between">
            <span className="text-lg font-semibold">{product.price} $</span>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-sm">
                {product.rating.rate}
              </span>
              <IoStarSharp className="fill-yellow-500" />
            </div>
          </div>
        </div>
        <p className="overflow-hidden text-ellipsis">{product.description}</p>
      </div>
    </li>
  );
}

export default ProductItem;
