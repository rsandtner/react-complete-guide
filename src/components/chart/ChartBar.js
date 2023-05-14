import 'components/chart/ChartBar.css';

const ChartBar = (props) => {
  const fill = {
    height: calculateFill(props.max, props.value) + '%',
  };

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={fill}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

const calculateFill = (max, actual) => {
  if (max <= 0) {
    return 0;
  }

  return Math.round((actual / max) * 100);
};

export default ChartBar;
