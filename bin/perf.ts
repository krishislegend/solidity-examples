import createPerf = require('../script/createPerf');

try {
    createPerf.perfAll(true);
} catch (err) {
    console.error("Execution failed: " + err.message);
    process.exit(1);
}