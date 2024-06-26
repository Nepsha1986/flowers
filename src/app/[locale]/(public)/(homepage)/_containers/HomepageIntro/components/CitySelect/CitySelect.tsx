"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Select } from "antd";

import { getCityOptions } from "@shared/lib/cities";
import { useDictionary } from "@shared/i18n";

const CitySelect = () => {
  const { locale, dictionary } = useDictionary();
  const router = useRouter();
  const options = getCityOptions(locale);

  const [val, setVal] = useState();

  const handleClick = () => {
    router.push(`/${locale}/${val}`);
  };

  return (
    <div data-testid="city_select">
      <Select
        onChange={setVal}
        placeholder={dictionary.common.select_city}
        style={{ width: "320px", marginRight: "10px" }}
        options={options.map(({ label, value }) => ({
          value,
          label,
        }))}
      />

      <Button type="primary" disabled={!val} onClick={handleClick}>
        {dictionary.common.search}
      </Button>
    </div>
  );
};

export default CitySelect;
