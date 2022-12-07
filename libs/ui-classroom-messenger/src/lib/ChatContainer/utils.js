export const MessageMockupData = {
  chatData: [
    {
      messageId: '204',
      senderId: '101',
      senderName: 'Valeria',
      senderLastname: 'Harris',
      timestamp: '1665142200',
      textContent: 'Any type or brand will do.',
      deliveredStatus: true,
      sentStatus: true,
      readStatus: false,
    },
    {
      messageId: '202',
      senderId: '102',
      senderName: 'Rolfi',
      senderLastname: 'Sanchez',
      timestamp: '1665141900',
      textContent:
        'I see, sure. Do you have a preferred abacus type or brand that I can use as a reference?',
      deliveredStatus: true,
      sentStatus: true,
      readStatus: true,
    },
    {
      messageId: '201',
      senderId: '101',
      senderName: 'Valeria',
      senderLastname: 'Harris',
      timestamp: '1665141840',
      textContent:
        "Hey Rolfi, Im Kelvin's math teacher. I wanted to let you know that although Kelvin has improved his math skills considerably, I believe we can improve even further if we include an abacus as part of the learning process.",
      deliveredStatus: true,
      sentStatus: true,
      readStatus: true,
    },
    {
      messageId: '203',
      senderId: '102',
      senderName: 'Rolfi',
      senderLastname: 'Sanchez',
      timestamp: '1665141960',
      textContent:
        "I'm actually going out to run some errands, would like to use this time to get one for him.",
      deliveryStatus: true,
      readStatus: true,
    },
  ],
};

export function sortMessagesByDate(a, b) {
  if (a.timestamp < b.timestamp) {
    return -1;
  }
  if (a.timestamp > b.timestamp) {
    return 1;
  }
  return 0;
}
