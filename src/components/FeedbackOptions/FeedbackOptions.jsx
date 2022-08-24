import s from '../FeedbackOptions/FeedbackOptions.module.css';

import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, handleChange }) {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => {
              handleChange(option);
            }}
            type="button"
            className={s.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleChange: PropTypes.func.isRequired,
};
