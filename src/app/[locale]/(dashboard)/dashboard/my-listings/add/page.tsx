import Title from "antd/lib/typography/Title";
import { Locale } from "@shared/i18n";
import { getDictionary } from "@shared/i18n/server";
import CreateProductForm from "./CreateProductForm";

export default async function Products({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale);
  const { create_a_new_listing } = dict.dashboard.common;

  return (
    <div>
      <Title>{create_a_new_listing}</Title>
      <CreateProductForm />
    </div>
  );
}
