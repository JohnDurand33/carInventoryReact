import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;  /* or "any" */
}

export default function Button( props: ButtonProps ) {
    return (
    <div>
        { props.children }
    </div>
    )
}

