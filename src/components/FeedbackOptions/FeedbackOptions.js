import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.buttons}>
      {options.map((option, index) => (
        <button
          type="button"
          className={styles.button}
          key={index}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
