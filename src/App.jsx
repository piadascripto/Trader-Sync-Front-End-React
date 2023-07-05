import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableChart from './tablechart';
import TradeSummary from './tradesummary';
import FileUpload from './fileupload';

export default function App() {
  return (
    <div>
      <FileUpload />
      <TradeSummary />
      <TableChart />
    </div>
  );
}
