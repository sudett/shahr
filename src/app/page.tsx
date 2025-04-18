import ProductList from "@/components/products/ProductList";
import SelectedProducts from "@/components/products/SelectedProducts";
import UsersList from "@/components/users/UsersList";

export default function Home() {
  return (
    <main className="max-w-3xl w-full mx-auto grid grid-cols-[minmax(600px,_1fr)_100px_200px] gap-4 py-8 px-4">
      <ProductList />
      <UsersList />
      <SelectedProducts />
    </main>
  );
}
