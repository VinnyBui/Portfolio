type Props = {
  params: {
    id: string;
  };
};

export default function ProjectsPage({params}: Props) {
  const projectId = params.id;

  return (
    <main>
      <h1>Projects</h1>
    </main>
  );
}
