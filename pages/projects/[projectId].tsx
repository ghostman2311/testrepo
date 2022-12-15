import Head from "next/head";
import retitle from "../../lib/retitle";

const ProjectDetail = () => {
  const project = {
    title: "Youdera",
  };
  return (
    <Head>
      <title>{retitle(project.title)}</title>
      <meta property="og:title" content={retitle(project.title)} key="title" />
    </Head>
  );
};

export default ProjectDetail;
