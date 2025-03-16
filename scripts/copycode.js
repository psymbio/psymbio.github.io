document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("pre").forEach(preBlock => {
        const button = document.createElement("button");
        button.className = "copy-btn";
        button.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M4 1H12V3H4V1ZM3 0V4H13V0H3ZM2 3H0V16H11V3H9V14H2V3ZM4 5H12V6H4V5ZM4 7H12V8H4V7ZM4 9H10V10H4V9ZM4 11H9V12H4V11Z"></path>
            </svg>
        `; // GitHub-style copy icon

        button.addEventListener("click", function () {
            const code = preBlock.querySelector("code").innerText;

            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = "✔ Copied!";
                setTimeout(() => button.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M4 1H12V3H4V1ZM3 0V4H13V0H3ZM2 3H0V16H11V3H9V14H2V3ZM4 5H12V6H4V5ZM4 7H12V8H4V7ZM4 9H10V10H4V9ZM4 11H9V12H4V11Z"></path>
                    </svg>
                `, 1500);
            }).catch(err => console.error("Failed to copy:", err));
        });

        preBlock.style.position = "relative";
        preBlock.appendChild(button);
    });
});
