// ============================================
// EMPLOYEE DATA WITH GOOGLE IMAGES
// ============================================
const employees = [
    {
        "id": 1,
        "name": "Sarah Johnson",
        "position": "Senior Software Engineer",
        "department": "Engineering",
        "email": "sarah.johnson@insa.com",
        "phone": "+1 (555) 123-4567",
        // Using Google Images search URLs
        "photo": "https://images.unsplash.com/photo-1583692331501-5339b76cbf1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        "id": 2,
        "name": "Michael Chen",
        "position": "Product Manager",
        "department": "Product",
        "email": "michael.chen@insa.com",
        "phone": "+1 (555) 234-5678",
        "photo": "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=2048x2048&w=is&k=20&c=YmjrR4r6G_4XUliPPK3PPLHrkqKLvSY2D3ZEQewLZ38="
    },
    {
        "id": 3,
        "name": "Emily Rodriguez",
        "position": "UX/UI Designer",
        "department": "Design",
        "email": "emily.rodriguez@insa.com",
        "phone": "+1 (555) 345-6789",
        "photo": "https://i.pinimg.com/control1/1200x/b7/21/79/b721799c8ba7358b16ab0155d250afa3.jpg"
    },
    {
        "id": 4,
        "name": "David Kim",
        "position": "Data Scientist",
        "department": "Analytics",
        "email": "david.kim@insa.com",
        "phone": "+1 (555) 456-7890",
        "photo": "https://www.google.com/images?q=david+kim+professional+headshot&tbm=isch"
    },
    {
        "id": 5,
        "name": "Jessica Taylor",
        "position": "Marketing Director",
        "department": "Marketing",
        "email": "jessica.taylor@insa.com",
        "phone": "+1 (555) 567-8901",
        "photo": "https://www.google.com/images?q=jessica+taylor+professional+headshot&tbm=isch"
    },
    {
        "id": 6,
        "name": "Robert Patel",
        "position": "DevOps Engineer",
        "department": "Engineering",
        "email": "robert.patel@insa.com",
        "phone": "+1 (555) 678-9012",
        "photo": "https://www.google.com/images?q=robert+patel+professional+headshot&tbm=isch"
    },
    {
        "id": 7,
        "name": "Amanda Lee",
        "position": "Frontend Developer",
        "department": "Engineering",
        "email": "amanda.lee@insa.com",
        "phone": "+1 (555) 789-0123",
        "photo": "https://www.google.com/images?q=amanda+lee+professional+headshot&tbm=isch"
    },
    {
        "id": 8,
        "name": "James Wilson",
        "position": "Backend Developer",
        "department": "Engineering",
        "email": "james.wilson@insa.com",
        "phone": "+1 (555) 890-1234",
        "photo": "https://www.google.com/images?q=james+wilson+professional+headshot&tbm=isch"
    },
    {
        "id": 9,
        "name": "Lisa Wong",
        "position": "QA Engineer",
        "department": "Quality Assurance",
        "email": "lisa.wong@insa.com",
        "phone": "+1 (555) 901-2345",
        "photo": "https://www.google.com/images?q=lisa+wong+professional+headshot&tbm=isch"
    },
    {
        "id": 10,
        "name": "Thomas Brown",
        "position": "HR Manager",
        "department": "Human Resources",
        "email": "thomas.brown@insa.com",
        "phone": "+1 (555) 012-3456",
        "photo": "https://www.google.com/images?q=thomas+brown+professional+headshot&tbm=isch"
    },
    {
        "id": 11,
        "name": "Maria Garcia",
        "position": "Full Stack Developer",
        "department": "Engineering",
        "email": "maria.garcia@insa.com",
        "phone": "+1 (555) 123-7890",
        "photo": "https://www.google.com/images?q=maria+garcia+professional+headshot&tbm=isch"
    },
    {
        "id": 12,
        "name": "John Smith",
        "position": "IT Support Specialist",
        "department": "IT",
        "email": "john.smith@insa.com",
        "phone": "+1 (555) 456-1234",
        "photo": "https://www.google.com/images?q=john+smith+professional+headshot&tbm=isch"
    }
];

// ============================================
// APPLICATION STATE
// ============================================
let filteredEmployees = [...employees];

// ============================================
// DOM REFS
// ============================================
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const employeeGrid = document.getElementById('employeeGrid');
const totalCount = document.getElementById('totalCount');
const showingCount = document.getElementById('showingCount');

// ============================================
// RENDER FUNCTION
// ============================================
function renderEmployees(employeeList) {
    // Update stats
    totalCount.textContent = employees.length;
    showingCount.textContent = employeeList.length;

    // Show/hide clear button
    const searchTerm = searchInput.value.trim();
    if (searchTerm.length > 0) {
        clearBtn.classList.add('show');
    } else {
        clearBtn.classList.remove('show');
    }

    // No results
    if (employeeList.length === 0) {
        employeeGrid.innerHTML = `
            <div class="no-results">
                <span class="emoji">🔍</span>
                <h2>No Employees Found</h2>
                <p>We couldn't find anyone matching <strong>"${searchTerm}"</strong></p>
                <p class="suggestion">
                    💡 Try a different name or check your spelling
                </p>
            </div>
        `;
        return;
    }

    // Generate employee cards
    employeeGrid.innerHTML = employeeList.map((emp, index) => `
        <div class="employee-card" style="animation-delay: ${index * 0.05}s">
            <img 
                src="${emp.photo}" 
                alt="${emp.name}" 
                class="profile-image"
                loading="lazy"
                onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(emp.name)}&size=120&background=1a56db&color=fff&bold=true'"
            >
            <div class="employee-name">${emp.name}</div>
            <div class="employee-position">${emp.position}</div>
            <span class="employee-department">
                <i class="fas fa-building"></i> ${emp.department}
            </span>
            <div class="employee-details">
                <div class="detail-item">
                    <span class="icon"><i class="fas fa-envelope"></i></span>
                    <a href="mailto:${emp.email}">${emp.email}</a>
                </div>
                <div class="detail-item">
                    <span class="icon"><i class="fas fa-phone"></i></span>
                    <a href="tel:${emp.phone}">${emp.phone}</a>
                </div>
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

    // Filter by name (case insensitive)
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
// ADD EMPLOYEE (Bonus Feature)
// ============================================
function addEmployee(name, position, department, email, phone, photo) {
    const newEmployee = {
        id: employees.length + 1,
        name: name,
        position: position,
        department: department,
        email: email,
        phone: phone,
        photo: photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=120&background=1a56db&color=fff&bold=true`
    };
    
    employees.push(newEmployee);
    filteredEmployees = [...employees];
    renderEmployees(filteredEmployees);
    
    console.log(`✅ Employee "${name}" added successfully!`);
    // Show notification
    showNotification(`✅ "${name}" has been added!`, 'success');
}

// ============================================
// DELETE EMPLOYEE (Bonus Feature)
// ============================================
function deleteEmployee(id) {
    if (!confirm('Are you sure you want to delete this employee?')) {
        return;
    }
    
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        const name = employees[index].name;
        employees.splice(index, 1);
        filteredEmployees = [...employees];
        renderEmployees(filteredEmployees);
        console.log(`🗑️ Employee "${name}" deleted`);
        showNotification(`🗑️ "${name}" has been removed`, 'error');
    }
}

// ============================================
// NOTIFICATION SYSTEM (Bonus)
// ============================================
function showNotification(message, type = 'success') {
    const colors = {
        success: '#059669',
        error: '#dc2626',
        info: '#1a56db'
    };
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        font-weight: 500;
        z-index: 9999;
        animation: slideDown 0.3s ease;
        max-width: 400px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', function(e) {
    // Ctrl+K or Cmd+K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        clearSearch();
    }
});

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderEmployees(employees);
    console.log('👥 INSA Employee Directory Loaded!');
    console.log(`📊 Total Employees: ${employees.length}`);
    console.log('💡 Press Ctrl+K to focus search');
    console.log('💡 Press Escape to clear search');
    
    // Show welcome notification
    setTimeout(() => {
        showNotification(`👋 Welcome! ${employees.length} employees loaded`, 'info');
    }, 500);
});

// ============================================
// EXPOSE FUNCTIONS TO GLOBAL SCOPE
// ============================================
window.searchEmployee = searchEmployee;
window.clearSearch = clearSearch;
window.addEmployee = addEmployee;
window.deleteEmployee = deleteEmployee;
window.showNotification = showNotification;