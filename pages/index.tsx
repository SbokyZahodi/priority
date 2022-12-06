import { NextPage } from "next";
import Layout from "../components/main/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={`h-full w-full flex justify-center items-center`}>
      Выберите проект
    </div>
    </Layout>
  );
};

export default Home;
