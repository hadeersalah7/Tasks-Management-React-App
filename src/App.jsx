import { useState } from "react";
import NewProject from "./components/NewProject/NewProject";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import ProjectSidebar from "./components/Sidebar/ProjectSidebar";

function App() {
  const [selectedStates, setSelectedStates] = useState({
    selectedProject: undefined,
    projects: []
  })

  const handleStartAddProject = () => {
    setSelectedStates(prevState => {
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  const handleAddProject = (projectData) => {
    setSelectedStates(prevProjects => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevProjects,
        projects:[...prevProjects.projects, newProject]
    }
  })
}
console.log(selectedStates)
  let content;
  if (selectedStates.selectedProject === null) {
    content = <NewProject onAdd={ handleAddProject} />
  } else if (selectedStates.selectedProject === undefined) {
    content = <NoProjectSelected onAddStart={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
