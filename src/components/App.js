import { useState } from 'react';
import './App.css';
import Controls from './Controls';
import Value from './Value';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackClick = button => {
    switch (button) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => (prevState += 1));
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / countTotalFeedback()) * good);
  };

  return (
    <div className="stats_block">
      <h1>Please leave feedback</h1>
      <Controls
        options={['good', 'neutral', 'bad']}
        onFeedbackClick={feedbackClick}
      />
      <h2>Statistic</h2>

      {countTotalFeedback() ? (
        <Value
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
          onTotal={countTotalFeedback()}
          onFeedback={countPositiveFeedbackPercentage()}
        />
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
}
