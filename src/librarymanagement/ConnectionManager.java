package librarymanagement;

import java.sql.*;

public class ConnectionManager {
	private Connection conn;
	
	private final String URL = "jdbc:postgresql://localhost:5432/library";
	private final String UNAME = "postgres";
	private final String PASS = "1234";
	
	public ConnectionManager() {
		try {
			this.conn = DriverManager.getConnection(URL, UNAME, PASS);
			System.out.println("Connection established successfully.");
		} catch (SQLException e) {
			System.out.println("Unable to connect to " + URL + " with the provided credentials");
			e.printStackTrace();
		}
	}
	
	public Connection getConnection() {
		return this.conn;
	}
	
	public void closeConnection() {
		if(this.conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
