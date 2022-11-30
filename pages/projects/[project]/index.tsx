import { GetServerSideProps, NextPage } from "next";
import Layout from "../../../components/main/layout";
import Tasks from "../../../components/main/tasks/tasks";
import { withAuth } from "../../../hoc/withAuth";

interface Props {}

const ProjectPage: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <Tasks />
    </Layout>
  );
};

export default withAuth(ProjectPage);
