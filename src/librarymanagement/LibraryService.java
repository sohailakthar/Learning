package librarymanagement;

import java.sql.*;
import java.util.Scanner;

public class LibraryService {
	private Connection conn;
	private Scanner sc = new Scanner(System.in);
	private ConnectionManager conMan = new ConnectionManager();
	
	public LibraryService() {
		conn = conMan.getConnection();
	}
	
	public void addBook() {
		System.out.print("Enter the book name: ");
		String bname = sc.nextLine();
		
		String sql = "INSERT INTO books (bname) values(?)";
		
		try {
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, bname);
			
			int rowsAffected = pstmt.executeUpdate();
			
			if(rowsAffected > 0) {
				System.out.println("Book added successfully.");
				System.out.println("Total rows affected: " + rowsAffected);
			}
		} catch (Exception e) {
			System.out.println("Unable to add the book.\n" + e.getMessage());
		}
	}
	
	public void deleteBookById() {
		System.out.print("Enter book id to delete: ");
		int bid = sc.nextInt();
		sc.nextLine();
		
		String sql = "DELETE FROM books WHERE bid=?";
		
		try {
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, bid);
			
			int rowsAffected = pstmt.executeUpdate();
			
			if(rowsAffected > 0) {
				System.out.println("Book deleted successfully.");
				System.out.println("Total rows affected: " + rowsAffected);
			}
		} catch(Exception e) {
			System.out.println("Unable to delete.\n" + e.getMessage());
		}
	}
	
	public void updateBookById() {
		System.out.print("Enter book id to update: ");
		int bid = sc.nextInt();
		sc.nextLine();
		
		System.out.print("Enter book name to update: ");
		String bname = sc.nextLine();
		
		String sql = "UPDATE books SET bname=? WHERE bid=?";
		
		try {
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, bname);
			pstmt.setInt(2, bid);
			
			int rowsAffected = pstmt.executeUpdate();
			
			if(rowsAffected > 0) {
				System.out.println("Book updated successfully.");
				System.out.println("Total rows affected: " + rowsAffected);
			}
		} catch(Exception e) {
			System.out.println("Unable to updated.\n" + e.getMessage());
		}
	}
	
	public void closeConnection() {
		try {
			this.conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
