import React from 'react';

type ButtonProps = {
    text:string;
    color:string;
    onClick:React.MouseEventHandler<HTMLElement> | undefined;
}

const Button:React.FC<ButtonProps> = ({text,color,onClick}) => {
    return (
        <div>
            
        </div>
    );
}

export default Button;
