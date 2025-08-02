import React from "react";
import SingleBlog from "./singleBlog";

export default async function Page({
  params,
}: {
  params: Promise<{ encrypted_id: string }>;
}) {
  const encrypted_id = (await params).encrypted_id;
  return (
    <section>
      <SingleBlog encrypted_id={encrypted_id} />
    </section>
  );
}
