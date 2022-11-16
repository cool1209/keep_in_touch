import Layout from "../shared/Layout/Layout";

const withLayout = (Component) => {
  const ComponentWithLayout = () => {
    return(
      <Layout>
        <Component />
      </Layout>
    )
  }

  return ComponentWithLayout;
}

export default withLayout;
