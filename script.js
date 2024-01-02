const form = document.querySelector("form"),
    statusText = form.querySelector(".button-area span")


form.onsubmit = (e) => {
    // preventing form from submitting
    e.preventDefault();
    statusText.style.color = "#0D6EFD";
    statusText.style.display = "inline-block";
    let xhr = new XMLHttpRequest();
    // sending post request to message.php file
    xhr.open("POST", "message.php", true);
    xhr.onload = () => {
        const response = xhr.response;
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (response.indexOf("Email and password field are required" !== -1) || response.indexOf("Enter a valid email") || response.indexOf("Your message has been sent!")) {
                statusText.style.color = "red";
            } else {
                form.reset();
                setTimeout(() => {
                    statusText.style.display = "none";
                }, 3000)
            }

            statusText.innerText = response;
        }
    }
    const formData = new FormData(form);
    xhr.send(formData);

}