import { render } from '@testing-library/react';
import BroadcastsReportTable from './broadcasts-report-table';
describe('BroadcastsReportTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BroadcastsReportTable />);
    expect(baseElement).toBeTruthy();
  });
});
