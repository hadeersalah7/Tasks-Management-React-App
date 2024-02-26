import React from 'react'

const ProjectSidebar = () => {
    return (
        <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72'>
            <h2 className='mb-8 font-bold uppercase md:texl-xl text-stone-200'>Your Projects</h2>
            <div>
                <button className='py-2 px-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>
                    + Add a project
                </button>
            </div>
            <ul>
                
            </ul>
        </aside>
    )
}

export default ProjectSidebar