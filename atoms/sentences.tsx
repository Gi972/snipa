export const Sentences = ({ sentences = [] }: { sentences?: string[] }) => {
  const sentence = (sentence, index) => <li key={index}>{sentence}</li>;
  return <ul>{sentences.map(sentence)}</ul>;
};
