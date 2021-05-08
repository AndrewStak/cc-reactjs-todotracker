import React from 'react';

type ButtonProps = {
    text: string;
    color: string;
    onClick: React.MouseEventHandler<HTMLElement> | undefined;
}

const Button: React.FC<ButtonProps> = (ps) => {
    return (
        <button
            onClick={ps.onClick}
            style={{ backgroundColor: ps.color }}
            className='btn'
        >
            {ps.text}
        </button>
    );
}

export default Button;
