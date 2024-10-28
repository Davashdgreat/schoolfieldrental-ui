import { useState } from "react"
const Types = () =>{
    const [items, setItems] = useState([
        {title: "All", active: true},
        {title: "Standard", active: false},
        {title: "Redsand", active: false},
        {title: "Kids", active: false},
    ])

    const handleClick = (title: string) =>{
        setItems((prev) =>
            prev.map((i) =>{
                return{...i, active: i.title === title}
            })
        )
    }
    return <div className="w-full lg:px-[310px] px-5 flex-col gap-8 items-center justify-center mt-[140px]">
        <span className="text-title lg:text-[48px] text-[35px] font-bold uppercase">
            Find by type
        </span>
        <div className="w-full flex items-center justify-center gap-5 overflow-x-auto">

            {items.map((item) => (
                <div
                    key={item.title}
                    onClick={() => handleClick(item.title)}
                    className={'h-11 px-6 cursor-pointer font-medium flex items-center border justify-center text-[17px]${item.active ? "bg-title text-white border-title" : "bg-white text-disabled border-gray-300"}'}
                >
                    {item.title}
                </div>
            ))}
        </div>
    </div>
}

export default Types