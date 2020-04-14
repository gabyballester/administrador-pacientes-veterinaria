import React from 'react';

const Header = ({titulo}) => ( //agregamos el nombre del prop
<header>
    {/* le paso prop titulo */}
    <h1 className="text-center">{titulo}</h1>
</header>
); 

export default Header;