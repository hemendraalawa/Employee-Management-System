const employees = [
    {
      "id": 1,
      "username": "AaravSharma",
      "email": "aarav.sharma@example.com",
      "password": "hemant@123",
      "tasks": [
        {
          "title": "Complete Project Report",
          "date": "2025-01-03",
          "category": "Work",
          "description": "Finish the final project report and submit to manager.",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Prepare Presentation",
          "date": "2025-01-05",
          "category": "Work",
          "description": "Create slides for the upcoming team meeting.",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client Follow-up",
          "date": "2025-01-02",
          "category": "Communication",
          "description": "Send follow-up emails to clients regarding feedback.",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "username": "IshitaMehta",
      "email": "ishita.mehta@example.com",
      "password": "hemant@123",
      "tasks": [
        {
          "title": "Code Review",
          "date": "2025-01-04",
          "category": "Development",
          "description": "Review code submissions from team members.",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team Meeting",
          "date": "2025-01-03",
          "category": "Work",
          "description": "Attend weekly team meeting for project updates.",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "username": "KabirVerma",
      "email": "kabir.verma@example.com",
      "password": "hemant@123",
      "tasks": [
        {
          "title": "Database Backup",
          "date": "2025-01-02",
          "category": "IT",
          "description": "Ensure all databases are backed up properly.",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Bug Fixing",
          "date": "2025-01-06",
          "category": "Development",
          "description": "Fix critical bugs reported by QA team.",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true
        },
        {
          "title": "Documentation Update",
          "date": "2025-01-05",
          "category": "Work",
          "description": "Update project documentation for the current sprint.",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "username": "MeeraNair",
      "email": "meera.nair@example.com",
      "password": "hemant@123",
      "tasks": [
        {
          "title": "Design Mockups",
          "date": "2025-01-03",
          "category": "Design",
          "description": "Create initial mockups for the new project.",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Feedback Analysis",
          "date": "2025-01-04",
          "category": "Research",
          "description": "Analyze feedback collected from customers.",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "username": "RahulSingh",
      "email": "rahul.singh@example.com",
      "password": "hemant@123",
      "tasks": [
        {
          "title": "Server Maintenance",
          "date": "2025-01-02",
          "category": "IT",
          "description": "Perform routine server maintenance.",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Data Cleanup",
          "date": "2025-01-05",
          "category": "IT",
          "description": "Clean up redundant data from the database.",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true
        },
        {
          "title": "Employee Training",
          "date": "2025-01-07",
          "category": "HR",
          "description": "Conduct training for new employees.",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    }
  ]


const admin = {
  "id": 101,
  "adminName": "RohanKumar",
  "email": "admin.rohan@example.com",
  "password": "hemant@123"
}


export const setLocalStorage = ()=>{
   localStorage.setItem('employees',JSON.stringify(employees) );
   localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage =()=>{
  const employeesData =  JSON.parse(localStorage.getItem("employees"));
  const adminData =  JSON.parse(localStorage.getItem('admin'))
   
}