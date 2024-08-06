const enrolledCourses = [];

function enrollCourse(courseId) {
    
    const courseElement = document.querySelector(`.course[data-id='${courseId}']`);
    const courseName = courseElement.getAttribute('data-name');
    const courseDescription = courseElement.getAttribute('data-description');

    
    if (enrolledCourses.find(course => course.id === courseId)) {
        alert('You are already enrolled in this course.');
        return;
    }

   
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
