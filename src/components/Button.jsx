import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, isBeam = false, containerClass, onClick }) => {
    return (
        <button className={`btn ${containerClass}`} onClick={onClick}>
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping" />
                    <span className="btn-ping_dot" />
                </span>
            )}
            {name}
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    isBeam: PropTypes.bool,
    containerClass: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;