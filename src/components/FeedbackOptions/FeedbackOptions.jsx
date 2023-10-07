import css from './FeedbackIptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(optionKey => (
    <li key={optionKey}>
      <button
        onClick={() => onLeaveFeedback(optionKey)}
        className={css.feedbackBtn}
        type="button"
        name={optionKey}
      >
        {optionKey}
      </button>
    </li>
  ));
};
