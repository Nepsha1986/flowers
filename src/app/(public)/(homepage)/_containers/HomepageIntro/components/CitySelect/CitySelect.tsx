"use client";

import { useRouter } from "next/navigation";
import { Button, Select } from "antd";
import { cities } from "@/lib/cities";
import { useState } from "react";

const CitySelect = () => {
  const router = useRouter();
  const [val, setVal] = useState();

  const handleClick = () => {
    router.push(`/${val}`);
  };
  return (
    <div data-testid="city_select">
      <Select
        onChange={setVal}
        placeholder="Select city"
        style={{ width: "320px", marginRight: "10px" }}
        options={cities.ua.map((i) => ({
          value: i,
          label: i,
        }))}
      />

      <Button onClick={handleClick}>Search</Button>
    </div>
  );
};

export default CitySelect;
