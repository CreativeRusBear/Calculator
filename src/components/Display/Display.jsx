import React from 'react';
import styles from './Display.module.css';
import PropTypes from 'prop-types';


const Display = (props) =>{
    const ariaLabel = "Current value is " + props.result;
    return (
        <div className={styles.Display}>
            <span
                className={styles.result}
                role="main"
                aria-label={ariaLabel}
            >{props.result}</span>
        </div>
    )
};

Display.propTypes = {
    result: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default Display