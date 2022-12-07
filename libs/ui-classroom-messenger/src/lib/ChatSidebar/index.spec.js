import { render } from '@testing-library/react';
import ChatSidebar from './index';
describe('ChatSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
