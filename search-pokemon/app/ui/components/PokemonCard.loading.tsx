export default function PokemonCardLoading(){
    return (
        <div className="animate-pulse w-40 py-2 ring-1 ring-slate-300 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl dark:shadow-slate-500 relative space-y-2">
            <div className="flex flex-row justify-center items-center">
                <div className="bg-slate-500 h-32 w-32 rounded-full"></div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="bg-slate-500 h-3 w-32 rounded-full"></div>
            </div>
            <div className="flex flex-row justify-center space-x-1">
                <div className="bg-slate-500 h-7 w-16 rounded-md"></div>
                <div className="bg-slate-500 h-7 w-16 rounded-md"></div>
            </div>
            <div className="flex flex-col items-center space-y-1">
                <div className="bg-slate-500 h-4 w-32 rounded-full"></div>
                <div className="bg-slate-500 h-4 w-32 rounded-full"></div>
            </div>
        </div>
    );
}