package LearningJDBC;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class StudentService {
    private Connection conn;
    private ConnectionMaker connMaker = new ConnectionMaker();
    private Scanner scanner = new Scanner(System.in);

    public StudentService() {
        this.conn = connMaker.getConnection();
    }

    public void addStudent() {
        System.out.print("Enter student id: ");
        int sid = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        System.out.print("Enter student name: ");
        String sname = scanner.nextLine();
        System.out.print("Enter student marks: ");
        int marks = scanner.nextInt();

        String sql = "INSERT INTO student values (?, ?, ?)";
        try {
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setInt(1, sid);
            pstmt.setString(2, sname);
            pstmt.setInt(3, marks);

            int rowsAffected = pstmt.executeUpdate();

            if(rowsAffected > 0) {
                System.out.println("Student added successfully.");
            } else {
                System.out.println("Failed to add student.");
            }
        } catch (SQLException e) {
            System.out.println("Error preparing statement: " + e.getMessage());
        }
    }

    public void getStudentById() {
        System.out.println("Enter the student id: ");
	int sid = scanner.nextInt();
	scanner.nextLine();

	String sql = "Select * from student where sid=?";

	try {
		PreparedStatement pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, sid);

		ResultSet rs = pstmt.executeQuery();

		while(rs.next()) {
			System.out.println("SID: " + sid + " - Name: " + rs.getString("sname") + " - Marks: " + rs.getInt("marks"));
		}
	} catch(Exception e) {
		System.out.println("Error occurred trying to fetch the student with id: " + sid);
		e.printStackTrace();
	}
    }
	
	public void getAllStudents() {
		String sql = "SELECT * FROM student";
		
		try {
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);

			while(rs.next()) {
				System.out.println("SID: " + rs.getInt("sid") + " - Name: " + rs.getString("sname") + " - Marks: " + rs.getInt("marks"));
			}
		} catch(Exception e) {
			System.out.println("Error occurred trying to fetch student details!");
			e.printStackTrace();
		}
	}

	public void deleteStudentById() {
		System.out.print("Enter student id to delete: ");
		int sid = scanner.nextInt();
		scanner.nextLine();

		String sql = "DELETE FROM student WHERE SID=?";

		try {
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, sid);

			int rowsAffected = pstmt.executeUpdate();

			if(rowsAffected > 0) {
				System.out.println("Student with id: " + sid + " deleted successfully.");
				System.out.println("Total rows affected: " + rowsAffected);
			}
		} catch (Exception e) {
			System.out.println("Unable to delete the student record with id = " + sid);
			e.printStackTrace();
		}
	}

	public void updateMarksById() {
		System.out.print("Enter student id to update marks: ");
		int sid = scanner.nextInt();
		scanner.nextLine();
		
		System.out.print("Enter updated marks: ");
		int updatedMarks = scanner.nextInt();
		scanner.nextLine();

		String sql = "UPDATE student SET marks=? WHERE sid=?";

		try {
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, updatedMarks);
			pstmt.setInt(2, sid);

			int rowsAffected = pstmt.executeUpdate();

			if(rowsAffected > 0) {
				System.out.println("Student with id: " + sid + " updated successfully.");
				System.out.println("Total rows affected: " + rowsAffected);
			}
		} catch (Exception e) {
			System.out.println("Unable to update marks of the student with id = " + sid);
			e.printStackTrace();
		}
	}

	public void closeConnection() {
		connMaker.closeConnection();
		scanner.close();
	}
}
