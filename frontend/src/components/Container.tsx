import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function Container({ children }: Props) {
    return (
        <div className="bg">
            <div className=" m-auto max-w-xl p-5 min-h-screen">{children}</div>
        </div>
    );
}
