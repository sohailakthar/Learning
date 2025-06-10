package employeems;

import java.sql.*;

public class ConnectionManager {
	private Connection conn;
	
	private final static String URL = "jdbc:postgresql://localhost:5432/employeedb";
	private final static String UNAME = "postgres";
	private final static String PASS = "1234";
	
	public ConnectionManager() {
		try {
			this.conn = DriverManager.getConnection(URL, UNAME, PASS);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public Connection getConnection() {
		return this.conn;
	}
	
	public void closeConnection() {
		try {
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
