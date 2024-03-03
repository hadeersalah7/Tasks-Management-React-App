import {forwardRef} from 'react'

const Input = forwardRef (function({ label, textarea, ...props }, ref){
  const classes = "w-full p-1 rounded-sm border-b-2 bg-stone-200 border-stone-300 text-stone-600 focus:outline-none focus:border-stone -600"
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
      {textarea ? <textarea ref={ref} {...props} className={classes} /> : <input ref={ref} className={ classes} />}
    </p>
  )
})

export default Input