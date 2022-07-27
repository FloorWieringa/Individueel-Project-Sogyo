package escape;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.glassfish.jersey.servlet.ServletContainer;

public class App {
    public static void main(String[] args) throws Exception {
        Server server = startServer(8080);

        ResourceHandler handler = new ResourceHandler();
        handler.setResourceBase("./client/build/");
        HandlerList handlers = new HandlerList();

        ServletContextHandler context = createStatefulContext(server);
        handlers.setHandlers(new Handler[]{ handler, context});

        server.setHandler(handlers);
        registerServlets(context);

        server.start();
        System.out.println("Started server.");
        System.out.println("Listening on http://localhost:8080/");
        System.out.println("Press CTRL+C to exit.");
        server.join();
    }

    private static Server startServer(int port) {
        return new Server(8080);
    }

    private static ServletContextHandler createStatefulContext(Server server) {
        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
        context.setContextPath("/");
        server.setHandler(context);
        return context;
    }

    private static void registerServlets(ServletContextHandler context) {
        // Use the Jersey framework to translate the classes in the
        // escape.api package to server endpoints (servlets).
        // For example, the StartGame class will become an endpoint at
        // http://localost:8080/escape/api/start
        ServletHolder serverHolder = context.addServlet(ServletContainer.class, "/escape/api/*");
        serverHolder.setInitOrder(1);
        serverHolder.setInitParameter("jersey.config.server.provider.packages",
                "escape.api");
    }
}
