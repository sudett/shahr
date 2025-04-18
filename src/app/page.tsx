import ProductList from "@/components/products/ProductList";
import SelectedProducts from "@/components/products/SelectedProducts";
import UsersList from "@/components/users/UsersList";
import { getProducts } from "@/services/productService";
import { getUsers } from "@/services/userService";
import { Product } from "@/types/product.types";
import { User } from "@/types/user.types";

export default async function Home() {
  const { data: products }: { data: Product[] } = await getProducts();
  const { data: users }: { data: User[] } = await getUsers();

  // at first I decided to present the data in table but I couldn't find any association between users and products so I implement the page via grid columns.

  return (
    <main className="w-full mx-auto grid grid-cols-2 md:grid-cols-[minmax(400px, _1fr)_200px] lg:grid-cols-[minmax(500px,_1fr)_200px_200px] gap-4 py-8 px-8">
      <ProductList products={products} />
      <UsersList users={users} />
      <SelectedProducts />
    </main>
  );
}
