// /*.........................Validacion para Emissions Form---------------------------------*/
// function primerFormulario(){
//     const formulario = document.getElementById('emissions-form');
//     const website = document.querySelector('#emissions-form .web-address input');
//     const pageViews = document.querySelector('#emissions-form .page-views input');
//     const error = document.getElementById('error-text');

//     function validarWebsite(e){
//         if (website.value == '' || website.value == null){
//             website.style.borderBottom = '1px solid red';
//             error.innerHTML = error.innerHTML + "<p class='error-visible'>Complete the Website Adress field</p>";
//         }else{
//             website.style.borderBottom = '1px solid black';
//         }
//         e.preventDefault();
//     }

//     function validarPageViews(e){
//         if (pageViews.value == '' || pageViews.value == null){
//             error.innerHTML = error.innerHTML + "<p class='error-visible'>Complete the Page Views field</p>";
//             pageViews.style.borderBottom = '1px solid red';            
//         }else{
//             pageViews.style.borderBottom = '1px solid black';  
//         }
//         e.preventDefault();
//     }

//     function validarFormulario(e){
//         error.innerHTML = '';
//         validarWebsite(e);
//         validarPageViews(e);
//     }
    
//     formulario.addEventListener('submit', validarFormulario);
// }

// primerFormulario();


// /*.........................Validacion para Formulario Contacto---------------------------------*/
// function contactForm(){
//     const formulario = document.getElementById('contact-form');
//     const email = document.getElementById('email');
//     const name = document.getElementById('firstName');
//     const lastName = document.getElementById('lastName');
//     const message = document.getElementById('message');
//     const error = document.getElementById('contactError');

//     /*Funcion Validar Email*/
//     function validarEmail(e){ 
//         const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;        
//         if (validation.test(email.value)){
//             email.style.borderBottom = '1px solid black';
//         }else{
//             email.style.borderBottom = '1px solid red';
//             error.innerHTML = error.innerHTML + "<p class='error-visible'>Complete Your email field</p>";
//         }
//         e.preventDefault();
//     }

//     /*Funcion Validar Nombre*/
//     function validarNombre(e){
//         if (name.value == '' || name.value == null){
//             name.style.borderBottom = '1px solid red';
//             error.innerHTML = error.innerHTML + "<p class='error-visible'>Complete First Name field</p>";
//         }else{
//             name.style.borderBottom = '1px solid black';
//         }
//         e.preventDefault();
//     }

//     /*Funcion Validar Apellido*/
//     function validarApellido(e){
//         if (lastName.value == '' || lastName.value == null){
//             lastName.style.borderBottom = '1px solid red';
//             error.innerHTML = error.innerHTML + "<p class='error-visible'>Complete Last Name field</p>";
//         }else{
//             lastName.style.borderBottom = '1px solid black';
//         }
//         e.preventDefault();
//     }

//     /*Funcion Validar Mensaje*/
//     function validarMensaje(e){
//         if (message.value == '' || message.value == null){
//             message.style.borderBottom = '1px solid red';
//             error.innerHTML = error.innerHTML + "<p class='error-visible'>Complete Message field</p>";
//         }else{
//             message.style.borderBottom = '1px solid black';
//         }
//         e.preventDefault();
//     }

//     function validarContactForm(e){
//         error.innerHTML = '';
//         validarEmail(e);
//         validarNombre(e);
//         validarApellido(e);
//         validarMensaje(e);

//         e.preventDefault();
//     }
//     formulario.addEventListener('submit', validarContactForm);
// }

// contactForm();

