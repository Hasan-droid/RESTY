
import React from 'react';

import Results from '../src/components/results/index';
import { render } from '@testing-library/react';

it('should render a list ', async () => {
  const raw = await fetch ('https://swapi.dev/api/people/');
  let data = await raw.json();
  let people = data.results;
  console.log(people);
  let results = Object.entries(people);

  render(<Results data={results} />);

  expect(results).toBeTruthy();
});