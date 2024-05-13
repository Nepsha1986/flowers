export default function SingleProduct({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Single Product Page Placeholder</h1>
      Product ID: {params.id}
    </>
  );
}
