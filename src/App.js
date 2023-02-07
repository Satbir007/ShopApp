import { Fragment } from 'react';

import Header from "./components/Layout/Header";
import TShirt from "./components/TShirts/TShirt";
import "./css/main.css";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <TShirt />
      </main>
    </Fragment>
  );
}

export default App;