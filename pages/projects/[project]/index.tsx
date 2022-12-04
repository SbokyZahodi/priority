import { GetServerSideProps, NextPage } from "next";
import Layout from "../../../components/main/layout";
import Tasks from "../../../components/main/tasks/tasks";
import { withAuth } from "../../../lib/hoc/withAuth";

interface Props {}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const project = ctx.query.project;

  return {
    props: {},
  };
};

const ProjectPage: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <Tasks />
    </Layout>
  );
};

export default withAuth(ProjectPage);
