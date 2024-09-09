import BackBtn from "@/app/ui/components/BackBtn";
import PokemonCardLoading from "@/app/ui/components/PokemonCard.loading";

export default function Loading(){
    return (
        <div className="animate-pulse w-full flex flex-row justify-center">

        <div className="max-w-3xl px-5">
            <div>
                <BackBtn />
            </div>
            <div className="h-8 w-32 bg-slate-500 rounded-full mx-auto mb-3"></div>
            <div className="flex flex-col md:flex-row md:justify-stretch">
                <div className="space-y-1">
                    <div className="h-80 w-80 rounded-md bg-slate-500"></div>
                    <div className="h-7 w-full bg-slate-500 rounded-full"></div>
                    <div className="h-7 w-full bg-slate-500 rounded-full"></div>
                </div>
                <div className="w-5 h-2"></div>
                <div className="">
                    <div className="h-full w-80 flex flex-col justify-between space-y-5">
                        <div className="w-full h-32 bg-slate-500 rounded-xl"></div>
                        <div>
                            <div className="w-16 h-5 bg-slate-500 rounded-full"></div>
                            <div className="flex flex-row space-x-1 mt-3">
                                <div className="w-16 h-6 bg-slate-500 rounded-md"></div>
                                <div className="w-16 h-6 bg-slate-500 rounded-md"></div>
                                <div className="w-16 h-6 bg-slate-500 rounded-md"></div>
                            </div>
                        </div>
                        <div>
                            <div className="w-16 h-5 bg-slate-500 rounded-full"></div>
                            <div className="flex flex-row space-x-1 mt-3">
                                <div className="w-16 h-6 bg-slate-500 rounded-md"></div>
                                <div className="w-16 h-6 bg-slate-500 rounded-md"></div>
                                <div className="w-16 h-6 bg-slate-500 rounded-md"></div>
                            </div>
                        </div>
                        <div>
                            <div className="w-16 h-5 bg-slate-500 rounded-full"></div>
                            <div className="flex flex-row space-x-1 mt-3">
                                <div className="w-16 h-6 bg-slate-500 rounded-md"></div>
                                <div className="w-16 h-6 bg-slate-500 rounded-md"></div>
                                <div className="w-16 h-6 bg-slate-500 rounded-md"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 space-y-2 w-80 md:w-full">
                <div className="w-16 h-5 bg-slate-500 rounded-full"></div>
                <div className="w-full h-20 bg-slate-500 rounded-md"></div>
            </div>
            <div className="mt-3 space-y-2 w-80 md:w-full">
                <div className="w-16 h-5 bg-slate-500 rounded-full"></div>
                <div className="w-full h-20 bg-slate-500 rounded-md"></div>
            </div>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 w-80 md:w-full">
                <PokemonCardLoading />
                <PokemonCardLoading />
                <PokemonCardLoading />
            </div>
        </div>
    </div>
    )
}