import { render } from '@testing-library/react';
import ChatContainer from './';
describe('ChatContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatContainer />);
    expect(baseElement).toBeTruthy();
  });
});
