package LearningJDBC;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionMaker {
    private static final String URL = "jdbc:postgresql://localhost:5432/studentdb";
    private static final String USER = "postgres";
    private static final String PASSWORD = "1234";

    private Connection conn;

    public static void main(String[] args) {
        ConnectionMaker connectionMaker = new ConnectionMaker();
        Connection connection = connectionMaker.getConnection();
        if (connection != null) {
            System.out.println("Connection established successfully!");
            connectionMaker.closeConnection();
        } else {
            System.out.println("Failed to establish connection.");
        }
    }
    public ConnectionMaker() {
        try {
            // Load the PostgreSQL JDBC driver
            Class.forName("org.postgresql.Driver");
            this.conn = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("Connection established successfully!");
        } catch (Exception e) {
            System.out.println("Connection failed!");
            e.printStackTrace();
        }
    }

    public Connection getConnection() {
        return this.conn;
    }

    public void closeConnection() {
        if (this.conn != null) {
            try {
                this.conn.close();
                System.out.println("Connection closed successfully!");
            } catch (Exception e) {
                System.out.println("Failed to close connection!");
                e.printStackTrace();
            }
        }
    }
}
