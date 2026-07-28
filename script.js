// ============================================
// EMPLOYEE DATA
// ============================================
const employees = [
    {
        "id": 1,
        "name": "Sarah Johnson",
        "position": "Senior Software Engineer",
        "department": "Engineering",
        "email": "sarah.johnson@company.com",
        "phone": "+1 (555) 123-4567",
        "photo": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        "id": 2,
        "name": "Michael Chen",
        "position": "Product Manager",
        "department": "Product",
        "email": "michael.chen@company.com",
        "phone": "+1 (555) 234-5678",
        "photo": "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        "id": 3,
        "name": "Emily Rodriguez",
        "position": "UX/UI Designer",
        "department": "Design",
        "email": "emily.rodriguez@company.com",
        "phone": "+1 (555) 345-6789",
        "photo": "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        "id": 4,
        "name": "David Kim",
        "position": "Data Scientist",
        "department": "Analytics",
        "email": "david.kim@company.com",
        "phone": "+1 (555) 456-7890",
        "photo": "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        "id": 5,
        "name": "Jessica Taylor",
        "position": "Marketing Director",
        "department": "Marketing",
        "email": "jessica.taylor@company.com",
        "phone": "+1 (555) 567-8901",
        "photo": "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        "id": 6,
        "name": "Robert Patel",
        "position": "DevOps Engineer",
        "department": "Engineering",
        "email": "robert.patel@company.com",
        "phone": "+1 (555) 678-9012",
        "photo": "https://randomuser.me/api/portraits/men/6.jpg"
    }
];

// ============================================
// DOM ELEMENTS
// ============================================
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const employeeGrid = document.getElementById('employeeGrid');

let filteredEmployees = [...employees];

// ============================================
// RENDER EMPLOYEES
// ============================================
function renderEmployees(employeeList) {
    // Show/hide clear button
    if (searchInput.value.trim().length > 0) {
        clearBtn.classList.add('show');
    } else {
        clearBtn.classList.remove('show');
    }

    // No results
    if (employeeList.length === 0) {
        employeeGrid.innerHTML = `
            <div class="no-results">
                <span class="emoji">🔍</span>
                <h2>No employees found</h2>
            </div>
        `;
        return;
    }

    // Display employees
    employeeGrid.innerHTML = employeeList.map(emp => `
        <div class="employee-card">
            <img 
                src="${emp.photo}" 
                alt="${emp.name}"
                onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(emp.name)}&size=120&background=000000&color=fff'"
            >
            <h3>${emp.name}</h3>
            <div class="position">${emp.position}</div>
            <div class="department"> ${emp.department}</div>
            <div class="details">
                <p><i class="fas fa-envelope"></i> <a href="mailto:${emp.email}">${emp.email}</a></p>
                <p><i class="fas fa-phone"></i> <a href="tel:${emp.phone}">${emp.phone}</a></p>
            </div>
        </div>
    `).join('');
}

// ============================================
// SEARCH FUNCTION
// ============================================
function searchEmployee() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredEmployees = [...employees];
        renderEmployees(filteredEmployees);
        return;
    }

    filteredEmployees = employees.filter(emp => 
        emp.name.toLowerCase().includes(searchTerm)
    );
    renderEmployees(filteredEmployees);
}

// ============================================
// CLEAR SEARCH
// ============================================
function clearSearch() {
    searchInput.value = '';
    searchInput.focus();
    filteredEmployees = [...employees];
    renderEmployees(filteredEmployees);
}

// ============================================
// KEYBOARD SHORTCUT
// ============================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        clearSearch();
    }
});

// ============================================
// START APP
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderEmployees(employees);
});