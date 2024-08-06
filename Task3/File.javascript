const enrolledCourses = [];

function enrollCourse(courseId) {
    // Get course details from the DOM
    const courseElement = document.querySelector(`.course[data-id='${courseId}']`);
    const courseName = courseElement.getAttribute('data-name');
    const courseDescription = courseElement.getAttribute('data-description');

    // Check if the course is already enrolled
    if (enrolledCourses.find(course => course.id === courseId)) {
        alert('You are already enrolled in this course.');
        return;
    }

    // Add course to the enrolled list
    enrolledCourses.push({ id: courseId, name: courseName, description: courseDescription });
    updateEnrolledCourses();
}

function updateEnrolledCourses() {
    const enrolledList = document.getElementById('enrolledList');
    enrolledList.innerHTML = '';

    enrolledCourses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course.name;
        enrolledList.appendChild(li);
    });
}
