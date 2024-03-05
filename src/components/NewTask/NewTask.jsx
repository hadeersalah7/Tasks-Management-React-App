import React, {useState} from 'react'

export default function NewTask({onAdd}) {
    const [inputValue, setInputValue] = useState("")
    const handlInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const handlAddbtn = () => {
        onAdd(inputValue)
        setInputValue("")
    }
    return (
        <div className='flex items-center gap-4'>
            <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' value={inputValue} onChange={handlInputChange}/>
            <button className='text-stone-700 hover:text-stone-950' onClick={handlAddbtn}>Add Task</button>
        </div>
    )
}
