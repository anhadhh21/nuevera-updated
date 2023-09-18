document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form')

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        const inputes = form.querySelectorAll('input');

        inputes.forEach(input => {
            const name = input.name;
            const value = input.value;
            formData[name] = value;
        }
        )
        console.log(formData)

        const response = await fetch('http://localhost:8000/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })

        })

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = "/Candidate-Page/index.html";
        } else {
            const error = await response.json();
            console.log(error);
        }
    }

    )
})
