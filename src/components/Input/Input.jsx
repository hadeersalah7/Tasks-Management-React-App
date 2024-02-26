import React from 'react'

const Input = ({ label, textarea, ...props }) => {
  const classes = "w-full p-1 rounded-sm border-b-2 bg-stone-200 border-stone-300 text-stone-600 focus:outline-none focus:border-stone -600"
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
      {textarea ? <textarea {...props} className={classes} /> : <input className={ classes} />}
    </p>
  )
}

export default Input