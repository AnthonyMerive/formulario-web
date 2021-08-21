let form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Datos enviados correctamente')
    form.reset();
})

// let boton = document.getElementById('boton')

// console.log(boton)