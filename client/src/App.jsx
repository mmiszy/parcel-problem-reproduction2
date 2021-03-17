import React from "react";
import { Layout } from "antd";

export const App = () => {
  return (
    <Layout>
      <div>
        <Layout.Header>Header</Layout.Header>
      </div>
      <Layout.Content>Hello, world!</Layout.Content>
    </Layout>
  );
};
