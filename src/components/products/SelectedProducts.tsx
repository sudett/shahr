import React from "react";

function SelectedProducts() {
  const selectedProducts = [
    { title: "test1", id: 1 },
    { title: "test2", id: 2 },
  ];

  return (
    <article>
      <h2 className="font-bold text-lg pb-8 cursor-pointer">
        Selected Products
      </h2>
      <ul className="flex flex-col gap-4">
        {selectedProducts.map((selectedProduct) => (
          <li key={selectedProduct.id}>{selectedProduct.title}</li>
        ))}
      </ul>
    </article>
  );
}

export default SelectedProducts;
