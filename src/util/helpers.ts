export const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
});

export function authorsFormatter(author: string[]) {
  if (!author) {
    return 'N/A';
  }

  if (author.length > 1) {
    return author.map((item, index) => (index ? ', ' + item : '' + item));
  }

  return author;
}
