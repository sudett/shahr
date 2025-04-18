import { Product } from "@/types/product.types";
import { useEffect, useRef, useState } from "react";

export const useLoadMoreItems = (products: Product[]) => {
  // for infinite scrolling to work we need an api with pagination but fakestoreapi doesn't work with pagination, so i decided to fetch the whole products at once and then simulate pagination using ref. you can test with slow 4G network

  const page = useRef(1);
  const [finalProducts, setFinalProducts] = useState(
    products.slice(0, 10 * page.current)
  );
  const [hasMore, setHasMore] = useState(true);
  const moreItemsElementRef = useRef(null);

  useEffect(() => {
    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      const firstEntry = entries[0];

      if (firstEntry.isIntersecting && hasMore) {
        page.current++;
        setFinalProducts(products.slice(0, 10 * page.current));

        if (page.current >= products.length) setHasMore(false);
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && moreItemsElementRef.current) {
      observer.observe(moreItemsElementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [finalProducts]);

  return { finalProducts, hasMore, moreItemsElementRef };
};
