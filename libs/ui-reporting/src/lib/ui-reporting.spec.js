import { render } from '@testing-library/react';
import UiReporting from './ui-reporting';
describe('UiReporting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiReporting />);
    expect(baseElement).toBeTruthy();
  });
});
