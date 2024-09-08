import { ReactNode } from "react";

export default function Attribute({
    children,
    title
}:{
    children: ReactNode,
    title: string
}){
    return (
        <div>
            <p className="text-sm font-bold">{title}</p>
            <p className="text-xs">{children}</p>
        </div>
    );
}