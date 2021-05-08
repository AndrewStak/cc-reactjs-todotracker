import React from 'react';
import Button from './Button';

type HeaderProps = {
    title: string;
    showAdd:boolean;
    onAdd:any;
}

const Header: React.FC<HeaderProps> = (ps) => {
    return (
        <header className='header'>
            <h1>{ps.title}</h1>
            <Button color={ps.showAdd? 'red':'green'}
             text={ps.showAdd? 'Close':'Add'}             
             onClick={ps.onAdd} />
        </header>
    );
}


export default Header;