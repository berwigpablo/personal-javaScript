const inputs = document.querySelectorAll('input');


const patterns = {
    telephone:new RegExp(/^[\d]{11}$/),
    username: new RegExp(/^[a-z\d]{5,12}$/, 'i'),
    password: new RegExp(/^[\w@-]{8,20}$/),
    slug: new RegExp(/^[a-z\d-]{8,20}$/),
    email: new RegExp(/^([\w\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)
}

//(/^([\w\d\.-]+)$/)
// validation function

function validate(field,RegExp){
    if (RegExp.test(field.value)){  
        field.className = 'valid';
    } else{
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) =>{
        //console.log(e.target.attributes.name.value)
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})

//let reg = /^[a-z]{5,12}$/gi;

//let username = new RegExp(/^[a-z]{5,12}/$, 'i', 'g');
