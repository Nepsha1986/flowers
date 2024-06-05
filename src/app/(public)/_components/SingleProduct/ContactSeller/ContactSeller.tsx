"use client";
import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";

import { vendorService } from "@/app/(public)/_services/vendor.service";

interface Props {
  id: string;
}

const ContactSeller = ({ id }: Props) => {
  const { data: vendor, refetch } = useQuery({
    queryKey: ["getSellerInfo", id],
    queryFn: () => {
      return vendorService.get(id);
    },
    enabled: false,
  });

  const handleClick = () => {
    refetch();
  };

  return (
    <>
      {!!vendor ? (
        <div> Email: {vendor.email}</div>
      ) : (
        <Button
          type="primary"
          size="large"
          style={{ marginTop: "2rem" }}
          onClick={handleClick}
        >
          Contact the Seller
        </Button>
      )}
    </>
  );
};

export default ContactSeller;
