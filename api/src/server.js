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

    // Adds the CORS plugin to the server (NTS - Review this topic more in depth)
    await server.register(corsPlugin);

    // Adds the error handler plugins to the server
    await server.register(errorHandlerPlugin);

    // Load the routes into the server
    server.route([...employeeRoutes, ...contractRoutes]);

    // Start hte server
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
