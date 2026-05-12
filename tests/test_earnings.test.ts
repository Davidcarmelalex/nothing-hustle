describe('Earnings calculator', () => {
  const calcTotal = (gigs: { earnings: number }[]) => gigs.reduce((s, g) => s + g.earnings, 0);
  it('sums correctly', () => expect(calcTotal([{ earnings: 100 }, { earnings: 250 }])).toBe(350));
  it('handles empty', () => expect(calcTotal([])).toBe(0));
});
