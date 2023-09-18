


//register api call
const register = async (formData) => {
    try {
        const response = await fetch('http://localhost:8000/api/v1/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.full_name,
                email: formData.email,
                password: formData.password,
                contactNo: formData.contactno,
                dateOfBirth: formData.date_of_birth,
                motherTongue: formData.mother_tongue,
                qualification: formData.qualification,
                university: formData.university,
                experience: formData.experience,
                jobTitle: formData.jobTitle,
                jobLocation: formData.jobLocation,
                resume: formData.resume

            })

        })

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            const error = await response.json();
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}


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
        await register(formData).then(() => {
            alert('register succesfully')
        })
    }
    )
})

