import { render } from '@testing-library/react';
import ChatOverview from './chat-overview';
describe('ChatOverview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatOverview />);
    expect(baseElement).toBeTruthy();
  });
});
