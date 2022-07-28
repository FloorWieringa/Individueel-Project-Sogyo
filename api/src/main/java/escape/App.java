package escape;

import java.text.ParseException;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.glassfish.jersey.servlet.ServletContainer;
import org.eclipse.jetty.server.handler.HandlerList;

public class App {
    public static void main(String[] args) throws Exception {
        var environmentPort = System.getenv("PORT");
        System.out.println("PORT variable: " + environmentPort);
        try {
            int portnr = Integer.parseInt(environmentPort);
            Server server = startServer(portnr);

            ResourceHandler handler = new ResourceHandler();
            handler.setResourceBase("C:/Users/wieri/Sogyo/java-opdrachten/ip/client/build");
            HandlerList handlers = new HandlerList();
    
            ServletContextHandler context = createStatefulContext(server);
            handlers.setHandlers(new Handler[]{ handler, context });
    
            server.setHandler(handlers);
            registerServlets(context);
    
            server.start();
            System.out.println("Started server.");
            System.out.println("Listening on http://localhost:8080/");
            System.out.println("Press CTRL+C to exit.");
            server.join();
        } catch (NumberFormatException e) {
            System.out.println("Port number incorrectly provided.");
            System.out.println("Shutting down.");
        }

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
