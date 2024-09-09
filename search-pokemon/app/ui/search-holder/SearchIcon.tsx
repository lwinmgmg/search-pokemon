export default function SearchIcon({
    isEmpty = false,
    setValue,
}:{
    isEmpty?: boolean,
    setValue: (value: string)=>void,
}){
    return (
        <div className="absolute top-0 right-0 h-full flex flex-col justify-center pr-3 text-slate-900">
            {
                isEmpty ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="size-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="size-6 hover:cursor-pointer" onClick={()=>setValue("")}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>)
            }
        </div>
    );
}