package employeems;

import java.sql.*;
import java.util.Scanner;

public class EmployeeManagementService {
	private ConnectionManager conMan;
	private Connection con;
	private Scanner sc;
	
	public EmployeeManagementService() {
		this.conMan = new ConnectionManager();
		this.con = conMan.getConnection();
		this.sc = new Scanner(System.in);
	}
	
	public void addEmployee() {
		System.out.print("Enter employee id: ");
		int eId = sc.nextInt();
		sc.nextLine();
		
		System.out.print("Enter employee name: ");
		String eName = sc.nextLine();
		
		System.out.print("Is this employee working: ");
		boolean isWorking = sc.nextBoolean();
		
		String sql = "INSERT INTO employee VALUES (?, ?, ?)";
		
		try {
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, eId);
			pstmt.setString(2, eName);
			pstmt.setBoolean(3, isWorking);
			
			int rowsAffected = pstmt.executeUpdate();
			
			if(rowsAffected > 0) {
				System.out.println("Employee added successfully.");
				System.out.println("Total rows affected: " + rowsAffected);
			}
		} catch (Exception e) {
			System.out.println("Unable to add the employee record.");
			e.printStackTrace();
		}
	}
	
	public void updateEmployeeWorkingStatus() {
		System.out.print("Enter employee id: ");
		int eId = sc.nextInt();
		sc.nextLine();

		System.out.print("Enter updated employee status: ");
		boolean updatedStatus = sc.nextBoolean();
		
		String sql = "UPDATE employee SET working=? WHERE eid=?";
		
		try {
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setBoolean(1, updatedStatus);
			pstmt.setInt(2, eId);
			
			int rowsAffected = pstmt.executeUpdate();
			
			if(rowsAffected > 0) {
				System.out.println("Employee status updated successfully.");
				System.out.println("Total rows affected: " + rowsAffected);
			}
		} catch (Exception e) {
			System.out.println("Unable to update the employee record.");
			e.printStackTrace();
		}
	}
	
	public void deleteEmployee() {
		System.out.print("Enter employee id: ");
		int eId = sc.nextInt();
		sc.nextLine();
		
		String sql = "DELETE FROM employee WHERE eid=?";
		
		try {
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, eId);
			
			int rowsAffected = pstmt.executeUpdate();
			
			if(rowsAffected > 0) {
				System.out.println("Employee deleted successfully.");
				System.out.println("Total rows affected: " + rowsAffected);
			}
		} catch (Exception e) {
			System.out.println("Unable to delete the employee record.");
			e.printStackTrace();
		}
	}
	
	public void displayAllEmployees() {
		String sql = "SELECT * FROM employee";
		
		try {
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				System.out.println(rs.getInt("eid") + " " + rs.getString("ename") + " " + rs.getBoolean("working"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void displayWorkingEmployees() {
		String sql = "SELECT * FROM employee WHERE working='true'";
		
		try {
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			
			while(rs.next()) {
				System.out.println(rs.getInt("eid") + " " + rs.getString("ename") + " " + rs.getBoolean("working"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public void closeConnection() {
		try {
			con.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
