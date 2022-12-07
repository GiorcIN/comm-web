import { render } from '@testing-library/react';
import ChatHeader from '.';
describe('ChatHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatHeader />);
    expect(baseElement).toBeTruthy();
  });
});
