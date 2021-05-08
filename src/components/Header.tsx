import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';

type HeaderProps = {
    title: string;
    showAdd: boolean;
    onAdd: any;
}

const Header: React.FC<HeaderProps> = (ps) => {
    const location = useLocation();

    return (
        <header className='header'>
            <h1>{ps.title}</h1>
            {
                location.pathname === '/' && 
                (
                    <Button color={ps.showAdd ? 'red' : 'green'}
                        text={ps.showAdd ? 'Close' : 'Add'}
                        onClick={ps.onAdd} />
                )
            }
        </header>
    );
}


export default Header;