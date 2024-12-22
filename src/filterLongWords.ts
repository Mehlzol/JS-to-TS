export const filterLongWords = (words: string[]): string[] => {
  return words.filter(word => word.length > 5);
};
