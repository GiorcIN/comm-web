import { render } from '@testing-library/react';
import DashboardCard from '.';
describe('DashboardCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardCard />);
    expect(baseElement).toBeTruthy();
  });
});
