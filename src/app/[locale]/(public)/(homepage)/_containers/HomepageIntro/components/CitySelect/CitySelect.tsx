"use client";

import { useRouter } from "next/navigation";
import { Button, Select } from "antd";
import { cities } from "@/lib/cities";
import { useContext, useState } from "react";
import { LocaleContext } from "@/app/[locale]/(public)/Providers";

const CitySelect = () => {
  const router = useRouter();
  const locale = useContext(LocaleContext);

  const [val, setVal] = useState();

  const handleClick = () => {
    router.push(`/${locale}/${val}`);
  };

  return (
    <div data-testid="city_select">
      <Select
        onChange={setVal}
        placeholder="Select city"
        style={{ width: "320px", marginRight: "10px" }}
        options={cities.ua.map((i) => ({
          value: i.toLowerCase().replace(" ", "-"),
          label: i,
        }))}
      />

      <Button type="primary" onClick={handleClick}>
        Search
      </Button>
    </div>
  );
};

export default CitySelect;