import React, {useState} from 'react'
import NewTask from '../NewTask/NewTask'

export default function Tasks({onAdd, onDelete}) {
    return (
        <section>
            <h2 className='text-2xl mb-4 text-stone-700 font-bold'>Tasks</h2>
            <NewTask onAdd={ onAdd} />
            <p className='text-stone-800 my-4'>This projects doesn't have any tasks yet.</p>
            <ul></ul>
        </section>
    )
}
