import Link from "next/link";
import { ReactNode } from "react";

function LeftNoPage({children}:{
    children: ReactNode
}){
    return (
        <button disabled className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" >
            {children}
        </button>
    );
}
function RightNoPage({children}:{
    children: ReactNode
}){
    return (
        <button disabled className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" >
            {children}
        </button>
    );
}

export default async function HomePagination({
    page,
    limit,
    currentCount
}:{
    page: number,
    limit: number,
    currentCount: number
}){
    return (
        <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing Page <span className="font-semibold text-gray-900 dark:text-white">{page}</span> and you have watched <span className="font-semibold text-gray-900 dark:text-white">{(limit * (page - 1)) + currentCount}</span> Pokemons
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
            {
            page > 1 ? <Link href={`/?page=${page - 1}&limit=${limit}`} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Prev
            </Link>:<LeftNoPage>No Page</LeftNoPage>
            }
            {
                limit === currentCount ? <Link href={`/?page=${page + 1}&limit=${limit}`} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                </Link>:<RightNoPage>No Page</RightNoPage>
            }
        </div>
        </div>
    );
}