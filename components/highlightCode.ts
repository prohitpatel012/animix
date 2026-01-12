function dedent(str: string) {
  // Split into lines
  const lines = str.split('\n');

  // Remove empty leading/trailing lines
  while (lines.length > 0 && lines[0].trim() === '') lines.shift();
  while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop();

  if (lines.length === 0) return '';

  // Find minimum indentation
  const indent = lines
    .filter(line => line.trim().length > 0)
    .reduce((min, line) => {
      const leadingSpaces = line.match(/^\s*/)?.[0].length ?? 0;
      return Math.min(min, leadingSpaces);
    }, Infinity);

  if (indent === Infinity) return lines.join('\n');

  // Remove indentation
  return lines
    .map(line => (line.length >= indent ? line.slice(indent) : line))
    .join('\n');
}

export function highlightCode(code: string) {
  if (typeof code !== "string") return "";

  const cleanCode = dedent(code);

  let html = cleanCode
    // escape HTML FIRST
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // comments
  html = html.replace(
    /(\/\/.*$)/gm,
    `<span class="token comment">$1</span>`
  );

  // strings matches strings that are NOT inside other html tags (simplified)
  // Be careful not to match class="token..." that we just added
  html = html.replace(
    /(['"`])(?:\\.|(?!\1).)*\1/g,
    (match) => {
      // Simple check to avoid replacing inside existing tags
      if (match.includes('class="')) return match;
      return `<span class="token string">${match}</span>`
    }
  );

  // keywords
  html = html.replace(
    /\b(import|export|from|return|const|let|function|if|else|map|default)\b/g,
    `<span class="token keyword">$1</span>`
  );

  // JSX tags
  html = html.replace(
    /(&lt;\/?\w+)/g,
    `<span class="token tag">$1</span>`
  );

  // JSX attributes (simple heuristic)
  html = html.replace(
    /(\s)(\w+)=/g,
    `$1<span class="token attr">$2</span>=`
  );

  // function names
  html = html.replace(
    /(\w+)(?=\()/g,
    `<span class="token function">$1</span>`
  );

  return html;
}
