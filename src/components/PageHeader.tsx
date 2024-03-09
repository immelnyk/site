"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import Card from "~/components/layout/Card";

const PageHeader: FC = () => {
  const title = usePathname().split("/")[1];

  if (!title) return null;

  return (
    <Card>
      <h2 className="text-2xl font-bold capitalize text-primary-dark">
        {title}
      </h2>
    </Card>
  );
};

export default PageHeader;
