import { useState } from "react";
import NewProject from "./components/NewProject/NewProject";
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected";
import ProjectSidebar from "./components/Sidebar/ProjectSidebar";
import SelectedProject from "./components/SelectedProject/SelectedProject";

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

  const handleCancelProject = () => {
    setSelectedStates(prevState => {
      return {
        ...prevState,
        selectedProject: undefined
      }
    })
}

  const handleAddProject = (projectData) => {
    setSelectedStates(prevProjects => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevProjects,
        selectedProject: undefined,
        projects:[...prevProjects.projects, newProject]
    }
  })
}

  const handleSelectedProject = (id) => {
    setSelectedStates((prevState) => {
      return {
        ...prevState,
        selectedProject: id
      }
    })
  }
  
  let foundProjects = selectedStates.projects.find(project => project.id === selectedStates.selectedProject)

  let content = <SelectedProject projects={foundProjects}/>;
  if (selectedStates.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
  } else if (selectedStates.selectedProject === undefined) {
    content = <NoProjectSelected onAddStart={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartProject={handleStartAddProject} projects={selectedStates.projects} onSelect={handleSelectedProject} />
      {content}
    </main>
  );
}

export default App;
