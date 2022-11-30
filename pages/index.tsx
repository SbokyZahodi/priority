import { NextPage } from "next";
import Layout from "../components/main/layout";
import { withAuth } from "../hoc/withAuth";

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <div className={`h-full w-full flex justify-center items-center`}>Выберите проект</div>
    </Layout>
  );
};

export default withAuth(Home);
