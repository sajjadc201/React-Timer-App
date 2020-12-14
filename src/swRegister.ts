const swRegister = () => {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("/service-worker.js")
                .then((registration) => {
                    console.log("service worker registered with", registration.scope);
                })
                .catch((error) => {
                    console.log("service worker failed to register", error);
                });
        });
    }
};

export default swRegister;