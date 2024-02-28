import Button from '../Button/Button'

const ProjectSidebar = ({ onStartProject }) => {

    return (
        <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72'>
            <h2 className='mb-8 font-bold uppercase md:texl-xl text-stone-200'>Your Projects</h2>
            <div>
                <Button onClick={onStartProject}>
                    +  Add a project
                </Button>

            </div>
            <ul>
                
            </ul>
        </aside>
    )
}

export default ProjectSidebar