import { Fragment } from 'react';

import TShirtSummary from './TShirtSummary';
import AvailableTShirt from './AvailableTShirt';

const Meals = () => {
  return (
    <Fragment>
      <TShirtSummary />
      <AvailableTShirt />
    </Fragment>
  );
};

export default Meals;