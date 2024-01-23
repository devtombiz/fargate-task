import * as process from "process";

// Simulate some processing
async function doProcessing() {
    console.log("Processing started...");
    // Example: Simulate some async work
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Processing completed.");
}

doProcessing().then(() => {
    console.log("Task finished. Exiting.");
    process.exit(0); // Exit cleanly
}).catch(error => {
    console.error("An error occurred:", error);
    process.exit(1); // Exit with error
});
