import { subjects } from "../Data/subjects.mjs";
const container = document.querySelector("#resources");

function displaySubjects(data) {
    container.innerHTML = "";
   
    data.forEach(subject => { 
        const card = document.createElement("section");

        card.innerHTML = `
            <h3> ${subject.name}</h3>
            <p>Lecturer:${subject.lecturer}</p>
            <p>Credit:${subject.credit}</p>
            <p>Semester:${subject.semester}</p>
            <button>Course Materials</button>
            `;
        card.classList.add("subject-card");
        container.appendChild(card);
    });
};

displaySubjects(subjects);