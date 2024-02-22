document.addEventListener('DOMContentLoaded', function() {
    const studentIdTag = document.getElementById('myStudentId');
    const customNumberInput = document.getElementById('customNumber');
    const imageSelect = document.getElementById('imageSelect');
    const imageTag = document.getElementById('images');

    // Function to change background color from user input and add student id
    function changeCustomColor() {
        const userInput = parseInt(customNumberInput.value);
        if (isNaN(userInput) || userInput < 0 || userInput > 100) {
            alert('Please enter a valid number between 0 and 100.');
            return;
        }
        studentIdTag.textContent = "200552575"; 
        if (userInput >= 0 && userInput < 20) {
            document.body.style.backgroundColor = 'green';
        } else if (userInput >= 20 && userInput < 40) {
            document.body.style.backgroundColor = 'blue';
        } else if (userInput >= 40 && userInput < 60) {
            document.body.style.backgroundColor = 'orange';
        } else if (userInput >= 60 && userInput < 80) {
            document.body.style.backgroundColor = 'purple';
        } else {
            document.body.style.backgroundColor = 'yellow';
        }
    }

    // Function to change background color from random number
    function changeRandomColor() {
        const randomInput = Math.floor(Math.random() * 100) + 1;
        changeCustomColor(randomInput);
    }

    // Function to generate options for select list
    function addList() {
        const imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
        // Clear existing options
        imageSelect.innerHTML = '<option value="">Please choose…</option>';
        // Add new options
        imageNames.forEach(imageName => {
            const option = document.createElement('option');
            option.textContent = imageName;
            option.value = imageName;
            imageSelect.appendChild(option);
        });
    }

    // Function to change image
    function changeImage() {
        const imageName = imageSelect.value;
        if (imageName) {
            imageTag.src = `img/${imageName}`; 
            imageTag.alt = imageName;
        } else {
            imageTag.src = '';
            imageTag.alt = '';
        }
    }

    // Event listeners for onclick event of buttons and select
    document.querySelector('.custColor').addEventListener('click', changeCustomColor);
    document.querySelector('.randColor').addEventListener('click', changeRandomColor);
    imageSelect.addEventListener('click', addList);
    imageSelect.addEventListener('change', changeImage);
});
