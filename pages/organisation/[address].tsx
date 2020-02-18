import React from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout.component";

export function OrganisationPage() {
  const router = useRouter();
  const { address } = router.query;

  return (
    <Layout>
      <p>Organisation {address}</p>
    </Layout>
  );
}

export default OrganisationPage;
