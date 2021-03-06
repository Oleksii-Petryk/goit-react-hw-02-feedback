import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>
        Good:
        <span> {good}</span>
      </p>
      <p>
        Neutral:
        <span> {neutral}</span>
      </p>
      <p>
        Bad:
        <span> {bad}</span>
      </p>
      <p>
        Total:
        <span> {total}</span>
      </p>
      <p>
        Positive feeedback:
        <span> {positivePercentage}%</span>
      </p>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
