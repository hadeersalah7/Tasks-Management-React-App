import React from 'react'
import Input from '../Input/Input'

const NewProject = () => {
    return (
        <div>
            <menu>
                <li></li>
            </menu>
            <div>
                <Input label="Title" />

                <Input label="Description" textarea/>

                <Input label="Due Date" />
            </div>
        </div>
    )
}

export default NewProject