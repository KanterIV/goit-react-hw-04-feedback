import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      <li>
        <p>
          Good: <span className={css.statisticsInfo}>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral: <span className={css.statisticsInfo}>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad: <span className={css.statisticsInfo}>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total: <span className={css.statisticsInfo}>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback:
          <span className={css.statisticsInfo}>{`${positivePercentage}%`}</span>
        </p>
      </li>
    </ul>
  );
};
