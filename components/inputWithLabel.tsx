type Props = {
    className?: string;
  };

const inputWithLabel = ({label}:any) => {
    const inputClass = 'form-input mx-3 mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm transition focus:border-primary-base focus:outline-none focus:ring-4  focus:ring-primary-lightest disabled:bg-gray-50 disabled:opacity-90 sm:text-sm sm:leading-5 mb-3'
    const labelClass = 'block items-center text-sm font-medium leading-5 text-gray-700'
  return (
    <div className="w-full">
    <label className={labelClass} htmlFor={label}>{label}</label>
    <input className={inputClass}
    //type={label}
      name={label} placeholder={`Entre ton ${label}`} />

  </div>
  )
}

export default inputWithLabel
