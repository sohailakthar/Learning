package homeworkSRP;

import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class EmployeeReportFormatter {
	public String printEmployeeReport(Employee emp) {
		StringBuilder employeeReport = new StringBuilder();
		
		employeeReport.append("\nEmp ID: " + emp.getId());
		employeeReport.append("\nEmp Name: " + emp.getName());
		employeeReport.append("\nDepartment: " + emp.getDepartment());
		employeeReport.append("\nWorking: " + emp.isWorking());
		
		return employeeReport.toString();
	}
	
	public void printCompleteReport(Map<Long, Employee> map, String format) {
		String reportString = "";
		
		if(format.equals("CSV")) {
			reportString = formatInCSV(map);
		}
		
		try {
			FileWriter fileWriter = new FileWriter("C:\\Users\\sohai\\OneDrive\\Desktop\\EmployeeCSVReport.csv");
			fileWriter.append(reportString);
			fileWriter.close();
			System.out.println("Report Generated Successfully!");
		} catch (IOException e) {
			System.out.println("An Error Occured!");
			e.printStackTrace();
		}
	}

	private String formatInCSV(Map<Long, Employee> map) {
		StringBuilder reportInCSV = new StringBuilder();
		
		reportInCSV.append("ID,Name,Department,Working\n");
		for(Map.Entry<Long, Employee> set : map.entrySet()) {
			Employee emp = set.getValue();
			reportInCSV.append(emp.getId()+",");
			reportInCSV.append(emp.getName()+",");
			reportInCSV.append(emp.getDepartment()+",");
			reportInCSV.append(emp.isWorking()+"\n");
		}
		
		return reportInCSV.toString();
	}
}
