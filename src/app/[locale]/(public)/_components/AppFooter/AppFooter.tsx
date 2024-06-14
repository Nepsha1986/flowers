"use client";

import { useDictionary } from "@shared/i18n";

const AppFooter = () => {
  const { dictionary } = useDictionary();

  return (
    <span>© 2024, GiftIdea. {dictionary.common.all_rights_reserved}.</span>
  );
};

export default AppFooter;
