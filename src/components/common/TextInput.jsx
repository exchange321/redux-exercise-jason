import React, { PropTypes } from 'react';

const TextInput = ({ containerClass, label, type, name, id, className, placeholder, value, onChange, error }) => {
    if (error) {
        containerClass += ' has-danger';
        className += ' form-control-danger';
    }
    return (
        <div className={containerClass}>
            <label className="form-control-label" htmlFor={id}>{label}</label>
            <input
                type={type}
                name={name}
                className={className}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

TextInput.propTypes = {
    containerClass: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
};

export default TextInput;
