import { render } from '@testing-library/react';
import ChatDetailPreview from './chat-detail-preview';
describe('ChatDetailPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatDetailPreview />);
    expect(baseElement).toBeTruthy();
  });
});
