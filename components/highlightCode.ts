export function highlightCode(code: string) {
    return code
        // escape HTML
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")

        // comments
        .replace(/(\/\/.*$)/gm, `<span class="token comment">$1</span>`)

        // strings
        .replace(/(["'`].*?["'`])/g, `<span class="token string">$1</span>`)

        // keywords
        .replace(
            /\b(import|export|from|return|const|let|function|if|else)\b/g,
            `<span class="token keyword">$1</span>`
        )

        // JSX attributes
        .replace(/(\w+)=/g, `<span class="token attr">$1</span>=`)

        // JSX tags
        .replace(/(&lt;\/?\w+)/g, `<span class="token tag">$1</span>`)

        // function names
        .replace(/(\w+)(?=\()/g, `<span class="token function">$1</span>`);
}
