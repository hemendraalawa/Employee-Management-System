const employees = [
  {
    id: 1,
    username: "AaravSharma",
    email: "a@a.com",
    password: "123",
    tasks: [
      {
        title: "Complete Project Report",
        date: "2025-01-03",
        category: "Work",
        description: "Finish the final project report and submit to manager.",
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 0,
        complexity: "High",
      },
      {
        title: "Prepare Presentation",
        date: "2025-01-05",
        category: "Work",
        description: "Create slides for the upcoming team meeting.",
        active: 0,
        newTask: 1,
        completed: 0,
        failed: 0,
        complexity: "Medium",
      },
      {
        title: "Client Follow-up",
        date: "2025-01-02",
        category: "Communication",
        description: "Send follow-up emails to clients regarding feedback.",
        active: 0,
        newTask: 0,
        completed: 1,
        failed: 0,
        complexity: "Low",
      },
    ],
  },
  {
    id: 2,
    username: "IshitaMehta",
    email: "ishita.mehta@example.com",
    password: "hemant@123",
    tasks: [
      {
        title: "Code Review",
        date: "2025-01-04",
        category: "Development",
        description: "Review code submissions from team members.",
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0,
        complexity: "High",
      },
      {
        title: "Team Meeting",
        date: "2025-01-03",
        category: "Work",
        description: "Attend weekly team meeting for project updates.",
        active: 0,
        newTask: 0,
        completed: 1,
        failed: 0,
        complexity: "Medium",
      },
    ],
  },
  {
    id: 3,
    username: "KabirVerma",
    email: "kabir.verma@example.com",
    password: "hemant@123",
    tasks: [
      {
        title: "Database Backup",
        date: "2025-01-02",
        category: "IT",
        description: "Ensure all databases are backed up properly.",
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 0,
        complexity: "Medium",
      },
      {
        title: "Bug Fixing",
        date: "2025-01-06",
        category: "Development",
        description: "Fix critical bugs reported by QA team.",
        active: 0,
        newTask: 1,
        completed: 0,
        failed: 1,
        complexity: "High",
      },
      {
        title: "Documentation Update",
        date: "2025-01-05",
        category: "Work",
        description: "Update project documentation for the current sprint.",
        active: 0,
        newTask: 0,
        completed: 1,
        failed: 0,
        complexity: "Low",
      },
    ],
  },
  {
    id: 4,
    username: "MeeraNair",
    email: "meera.nair@example.com",
    password: "hemant@123",
    tasks: [
      {
        title: "Design Mockups",
        date: "2025-01-03",
        category: "Design",
        description: "Create initial mockups for the new project.",
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 0,
        complexity: "High",
      },
      {
        title: "Feedback Analysis",
        date: "2025-01-04",
        category: "Research",
        description: "Analyze feedback collected from customers.",
        active: 0,
        newTask: 1,
        completed: 0,
        failed: 0,
        complexity: "Medium",
      },
    ],
  },
  {
    id: 5,
    username: "RahulSingh",
    email: "rahul.singh@example.com",
    password: "hemant@123",
    tasks: [
      {
        title: "Server Maintenance",
        date: "2025-01-02",
        category: "IT",
        description: "Perform routine server maintenance.",
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 0,
        complexity: "Medium",
      },
      {
        title: "Data Cleanup",
        date: "2025-01-05",
        category: "IT",
        description: "Clean up redundant data from the database.",
        active: 0,
        newTask: 1,
        completed: 0,
        failed: 1,
        complexity: "High",
      },
      {
        title: "Employee Training",
        date: "2025-01-07",
        category: "HR",
        description: "Conduct training for new employees.",
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
        complexity: "Low",
      },
    ],
  },
];



const admin = [
  {
    id: 101,
    username: "RohanKumar",
    email: "e@e.com",
    password: "123",
  },

  {
    id: 102,
    username: "HemantAlawa",
    email: "admin.hemant@example.com",
    password: "hemant@123",
  },

  {
    id: 103,
    username: "NareshSenani",
    email: "admin.naresh@example.com",
    password: "hemant@123",
  },

  {
    id: 104,
    username: "DeepakChouhan",
    email: "admin.deepak@example.com",
    password: "hemant@123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  // console.log(adminData);
  return { adminData, employeesData };
};
