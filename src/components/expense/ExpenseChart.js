import Chart from 'components/chart/Chart';

const ExpenseChart = (props) => {
  const data = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dez', value: 0 },
  ];

  props.items.forEach((item) => (data[item.date.getMonth()].value += item.price));
  const maxValue = data.map((item) => item.value).reduce((prev, actual) => Math.max(prev, actual), 0);

  return <Chart data={data} max={maxValue} />;
};

export default ExpenseChart;
