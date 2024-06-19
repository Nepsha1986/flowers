"use client";
import { Button, Descriptions } from "antd";
import { useQuery } from "@tanstack/react-query";

import { vendorService } from "@/app/[locale]/(public)/_services/vendor.service";
import { useDictionary } from "@shared/i18n";

interface Props {
  id: string;
}

const ContactSeller = ({ id }: Props) => {
  const { dictionary } = useDictionary();
  const { data: vendor, refetch } = useQuery({
    queryKey: ["getSellerInfo", id],
    queryFn: () => {
      return vendorService.get(id);
    },
    enabled: false,
  });

  const handleClick = () => {
    void refetch();
  };

  return (
    <>
      {!!vendor ? (
        // TODO: Change to another component. Descriptions are not for this purpose

        <Descriptions title={dictionary.common.sellers_info}>
          <Descriptions.Item
            style={{ display: "block", paddingBottom: 0 }}
            label={dictionary.common.name}
          >
            {vendor.firstName}
          </Descriptions.Item>
          <Descriptions.Item
            style={{ display: "block", paddingBottom: 0 }}
            label={dictionary.common.email}
          >
            {vendor.email}
          </Descriptions.Item>
          <Descriptions.Item
            style={{ display: "block", paddingBottom: 0 }}
            label={dictionary.common.phone}
          >
            {vendor.phoneNumber}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        <Button
          type="primary"
          size="large"
          style={{ marginTop: "2rem" }}
          onClick={handleClick}
        >
          {dictionary.common.contact_the_seller}
        </Button>
      )}
    </>
  );
};

export default ContactSeller;
