import './App.css';
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import TableChart from './tablechart';
import TradeSummary from './tradesummary';

export default function App() {
  return (
    <div>
		<TradeSummary />
    	<TableChart />
    </div>
  );
}

