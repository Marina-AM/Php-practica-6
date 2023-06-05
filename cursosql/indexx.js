function validarCampo(campoId, formato, errorId) {
    const campoValor = document.getElementById(campoId).value;
    const campo = document.getElementById(campoId);
    const error = document.getElementById(errorId);
  
    if (campoValor.length === 0) {
        campo.classList.remove("correcto");
        error.innerHTML = "Rellene este campo.";
        campo.classList.add("incorrecto");
        campo.classList.add("imagenIncorrecto");
        return false;
    }
  
    if (!formato.test(campoValor)) {
        campo.classList.remove("correcto");
        error.innerHTML = "Campo invalido.";
        campo.classList.add("incorrecto");
        campo.classList.add("imagenIncorrecto");
        return false;
    }
  
    campo.classList.remove("incorrecto");
    campo.classList.remove("imagenIncorrecto");
    error.innerHTML = "";
    campo.classList.add("correcto");
    campo.classList.add("imagenCorrecto");
  
    return true;
  }
  
  function validarNombre() {
    return validarCampo("nombre", /^[A-Za-z\s]+$/, "nombreError");
  }
  
  function validarEmail() {
    return validarCampo("email", /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "emailError");
  }
  
  function validarApellidos() {
    return validarCampo("apellidos", /^[A-Za-z\s]+$/, "apellidosError");
  }
  
  function validar() {
    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const apellidosValidos = validarApellidos();
  
    if (nombreValido && emailValido && apellidosValidos) {// Los campos son válidos, enviar el formulario
        alert("La inscripcion ha sido correcta.");

        return true;
    } else {
        return false;
    }
  }