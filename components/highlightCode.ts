export function highlightCode(code: string) {
  if (typeof code !== "string") return "";

  let html = code
    // escape HTML FIRST
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // comments
  html = html.replace(
    /(\/\/.*$)/gm,
    `<span class="token comment">$1</span>`
  );

  // strings
  html = html.replace(
    /(['"`])(?:\\.|(?!\1).)*\1/g,
    `<span class="token string">$&</span>`
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

  // function names
  html = html.replace(
    /(\w+)(?=\()/g,
    `<span class="token function">$1</span>`
  );

  return html;
}
