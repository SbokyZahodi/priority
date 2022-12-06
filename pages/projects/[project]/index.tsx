import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ITask } from "../../../API/projects/response";
import Layout from "../../../components/main/layout";
import Tasks from "../../../components/main/tasks/tasks";
import TasksLayout from "../../../components/main/tasks/tasksLayout";
import tasks from "../../../store/tasks";

interface Props {
  tasksProps: ITask;
}

const ProjectPage: NextPage<Props> = ({ tasksProps }) => {
  const router = useRouter();

  const project = router.query.project;

  useEffect(() => {
    if (project) {
      tasks.getTodos(project);
    }
  }, [project]);

  return (
    <Layout>
      <TasksLayout>
        <Tasks />
      </TasksLayout>
    </Layout>
  );
};

export default ProjectPage;
