export default function SearchInput({
    value,
    setValue,
    onFocus
}:{
    value: string,
    setValue: (e: string)=>void,
    onFocus: ()=>Promise<void>
}){
    return (
        <input
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            onFocus={onFocus}
            className="w-full rounded-full py-2 px-5 text-slate-900 ring-1 focus:ring-4 focus:outline-none"
            placeholder="Search" />
    );
}