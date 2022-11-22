import { render } from '@testing-library/react';
import UiClassroomMessenger from './ui-classroom-messenger';
describe('UiClassroomMessenger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiClassroomMessenger />);
    expect(baseElement).toBeTruthy();
  });
});
