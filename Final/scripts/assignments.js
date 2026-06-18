document.addEventListener("DOMContentLoaded", () => {
    const assignmentList = document.getElementById("assignment-list");

    // Sample database records tracking assignment parameters
    const currentAssignments = [
        { title: "Project Prototype Wireframes", course: "HCI", due: "Tonight at 11:59 PM" },
        { title: "Flexbox Grid Implementation", course: "Web Dev", due: "In 2 days" }
    ];

    if (assignmentList) {
        if (currentAssignments.length === 0) {
            assignmentList.innerHTML = "<li>🎉 All caught up! No pending assignments.</li>";
        } else {
            assignmentList.innerHTML = currentAssignments.map(task => `
                <li>
                    <strong>${task.title}</strong><br>
                    <small>Subject: ${task.course} | ⏳ Due: ${task.due}</small>
                </li>
            `).join('');
        }
    }
});