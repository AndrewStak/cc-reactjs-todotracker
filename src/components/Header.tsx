import React from 'react';
import Button from './Button';

type HeaderProps = {
    title: string;
}

const addClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log('Add Button Click');
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={addClick} />
        </header>
    );
}


export default Header;