import React from 'react';
import PropTypes from 'prop-types'; //importamos

const Header = ({titulo}) => ( //agregamos el nombre del prop
<header>
    {/* le paso prop titulo */}
    <h1 className="text-center">{titulo}</h1>
</header>
); 

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;