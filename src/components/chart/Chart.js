import 'components/chart/Chart.css';
import ChartBar from 'components/chart/ChartBar';

const Chart = (props) => {
  const bars = props.data.map((d) => {
    return <ChartBar key={d.label} label={d.label} value={d.value} max={props.max} />;
  });

  return <div className="chart">{bars}</div>;
};

export default Chart;
