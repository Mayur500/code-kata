import './App.css';
import { BusinessLoan } from "./views";
import Header from "./common/Header/Header";
import FormBox from './common/FormBox/FormBox';

function App() {
  return (
    <div className="App">
      <Header title="Easy Loan" />
      <main>
        <FormBox>
          <BusinessLoan/>
        </FormBox>
      </main>
    </div>
  );
}

export default App;
