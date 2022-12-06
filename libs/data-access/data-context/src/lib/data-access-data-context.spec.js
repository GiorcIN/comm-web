import { render } from '@testing-library/react';
import DataAccessDataContext from './data-access-data-context';
describe('DataAccessDataContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessDataContext />);
    expect(baseElement).toBeTruthy();
  });
});
