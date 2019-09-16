import { classnames } from '../../helpers/component';
import PropTypes from 'prop-types';
import React from 'react';

const TimeInputSelect = ({ value, options, onSelect }) => {
    const handleClick = ({ target }) => {
        const idx = parseInt(target.dataset.id, 10);
        if (isNaN(idx) || !options[idx]) {
            return;
        }
        return onSelect(options[idx].value);
    };

    return (
        <ul className="unstyled mt0 mb0" onClick={handleClick}>
            {options.map(({ label, value: otherValue }, i) => {
                const isSelected = value === otherValue;
                return (
                    <li
                        className={classnames(['pt0-5 pb0-5 p1', isSelected && 'bold'])}
                        key={i}
                        data-id={i}
                        data-is-selected={isSelected}
                    >
                        {label}
                    </li>
                );
            })}
        </ul>
    );
};

TimeInputSelect.propTypes = {
    value: PropTypes.instanceOf(Date),
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default TimeInputSelect;
