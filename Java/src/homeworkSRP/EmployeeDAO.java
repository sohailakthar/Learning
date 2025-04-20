package homeworkSRP;

import java.util.HashMap;

public class EmployeeDAO {
	private HashMap<Long, Employee> employeeDB;
	
	public HashMap<Long, Employee> getEmployeeDB() {
		return employeeDB;
	}

	public EmployeeDAO() {
		employeeDB = new HashMap<>();
	}
	
	public boolean saveEmployee(Employee emp) {
		if(employeeDB == null) {
			return false;
		}
		Long id = (Long)emp.getId();
		if(employeeDB.containsKey(id)) {
			return false;
		}
		employeeDB.put(id, emp);
		return true;
	}
	
	public boolean deleteEmployee(Long id) {
		if(!employeeDB.containsKey(id)) {
			return false;
		}
		employeeDB.remove(id);
		return true;
	}
	
	public Employee getEmployee(Long id) {
		if(!employeeDB.containsKey(id)) {
			return null;
		}
		return employeeDB.get(id);
	}
	
}
