import Hapi from "@hapi/hapi";
import employeeRoutes from "./routes/employeeRoutes.js";
import contractRoutes from "./routes/contractRoutes.js";
import corsPlugin from "./plugins/corsPlugin.js";
import errorHandlerPlugin from "./plugins/errorHandlerPlugin.js";

const init = async () => {
    // Creates the Hapi server instance
    const server = Hapi.server({
        port: 4000,
        host: "localhost",
    });
};
