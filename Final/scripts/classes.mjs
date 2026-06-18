import { lessons } from "../Data/lessons.mjs";

const classesContainer = document.querySelector("#classes");
const viewBtn = document.querySelector("#view-timetable");
const dialog = document.querySelector("#timetable-dialog");
const closeBtn = document.querySelector("#close-dialog");
const timetableContent = document.querySelector("#timetable-content");


const today = new Date().toLocaleDateString("en-US", {
    weekday: "long"
});


function displayTodaysClasses() {
    const todayData = lessons.find(
        lesson => lesson.day === today
    );

    if (!todayData) {
        classesContainer.innerHTML += "<p>No classes today.</p>";
        return;
    }

    const list = document.createElement("ul");

    todayData.lessons.forEach(lesson => {
        const item = document.createElement("li");
        item.textContent = `${lesson.time} — ${lesson.subject}`;
        list.appendChild(item);
    });

    classesContainer.appendChild(list);
}


function createTimetableTable() {
    let table = `
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
    `;

    lessons.forEach(day => {
        day.lessons.forEach((lesson, index) => {
            table += `
                <tr>
                    ${index === 0
                    ? `<td rowspan="${day.lessons.length}">${day.day}</td>`
                    : ""
                }
                    <td>${lesson.time}</td>
                    <td>${lesson.subject}</td>
                </tr>
            `;
        });
    });

    table += `
            </tbody>
        </table>
    `;

    timetableContent.innerHTML = table;
}


viewBtn.addEventListener("click", () => {
    createTimetableTable();
    dialog.showModal();
});


closeBtn.addEventListener("click", () => {
    dialog.close();
});

displayTodaysClasses();