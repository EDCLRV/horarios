
 <section class="experts" id="diagnostico">
        <h2 class="Subtitulo">Diagnostico Dinámico</h2>

<table>
        <thead>
            <tr>
                <th>Medida</th>
                <th class="columna-estrecha">Valor</th>
                <th class="columna-estrecha">Diagnóstico</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Presión Sistólica</td>
                <td><input type="number" id="presionSistolica" placeholder="Ingresa valor"></td>
                <td id="diagnostico-presion"></td>
            </tr>
            <tr>
                <td>Presión Diastólica</td>
                <td><input type="number" id="presionDiastolica" placeholder="Ingresa valor"></td>
                <td id="diagnostico-diastolica"></td>
            </tr>
            <tr>
                <td>Glucosa</td>
                <td><input type="number" id="glucosa" placeholder="Ingresa valor"></td>
                <td id="diagnostico-glucosa"></td>
            </tr>
            <tr>
                <td>Colesterol Total</td>
                <td><input type="number" id="colesterol" placeholder="Ingresa valor"></td>
                <td id="diagnostico-colesterol"></td>
            </tr>
            <tr>
                <td>Frecuencia Cardíaca</td>
                <td><input type="number" id="frecuenciaCardiaca" placeholder="Ingresa valor"></td>
                <td id="diagnostico-frecuencia"></td>
            </tr>
            <tr>
                <td>Índice de Masa Corporal (IMC)</td>
                <td><input type="number" id="imc" placeholder="Ingresa valor"></td>
                <td id="diagnostico-imc"></td>
            </tr>
            <tr>
                <td>Temperatura Corporal</td>
                <td><input type="number" id="temperatura" placeholder="Ingresa valor"></td>
                <td id="diagnostico-temperatura"></td>
            </tr>
            
        </tbody>
    </table>
      <button onclick="calcularDiagnostico()">Calcular Diagnóstico</button>
  </section>
<script>
        function calcularIMC() {
            const peso = parseFloat(document.getElementById('peso').value);
            const talla = parseFloat(document.getElementById('talla').value);
            const diagnosticoPeso = document.getElementById('diagnostico-peso');
            const diagnosticoTalla = document.getElementById('diagnostico-talla');

            if (!isNaN(peso) && !isNaN(talla) && talla > 0) {
                const imc = peso / (talla * talla);
                diagnosticoPeso.innerText = IMC: ${imc.toFixed(2)};

                // Diagnóstico basado en el IMC
                let mensajeDiagnostico;
                if (imc < 18.5) {
                    mensajeDiagnostico = "Bajo peso";
                } else if (imc >= 18.5 && imc < 24.9) {
                    mensajeDiagnostico = "Normal";
                } else if (imc >= 25 && imc < 30) {
                    mensajeDiagnostico = "Sobrepeso";
                } else if (imc >= 30 && imc < 34.9) {
                    mensajeDiagnostico = "Obesidad I";
                } else if (imc >= 35 && imc < 39.9) {
                    mensajeDiagnostico = "Obesidad II";
                } else {
                    mensajeDiagnostico = "Obesidad III";
                }
                diagnosticoTalla.innerText = mensajeDiagnostico;
            } else {
                diagnosticoPeso.innerText = 'Ingrese peso y talla válidos';
                diagnosticoTalla.innerText = '';
            }
        }
        function calcularDiagnostico() {

           

// Diagnóstico para Presión Arterial
const tas = parseInt(document.getElementById('tas').value);
const tad = parseInt(document.getElementById('tad').value);
let diagnostico = '';



if (tas < 90 && tad < 60) {
    diagnostico = 'Hipotensión';
} else if (tas >= 90 && tas <= 120 && tad >= 60 && tad <= 80) {
    diagnostico = 'Normotensión';
} else if (tas >= 120 && tas <= 129 && tad >= 60 && tad <= 80) {
    diagnostico = 'Elevada';
} else if ((tas >= 130 && tas <= 139) || (tad >= 80 && tad <= 89)) {
    diagnostico = 'Hipertensión Nivel 1';
} else if (tas > 140 || tad > 90) {
    diagnostico = 'Hipertensión Nivel 2';
} else if (tas > 180 || tad > 120) {
    diagnostico = 'Crisis Hipertensiva';
} else {
    diagnostico = 'Valor fuera de rango';
}

document.getElementById('diagnostico').innerText = diagnostico;





// Diagnóstico para Glucosa Capilar en Ayunas

const glucosa = parseInt(document.getElementById("glucosa").value);
const diagnosticoGlucosa = document.getElementById("diagnostico-glucosa");
if (glucosa < 100) {
    diagnosticoGlucosa.textContent = "Normoglucemia";
} else if (glucosa >= 101 && glucosa <= 125) {
    diagnosticoGlucosa.textContent = "Pre Diabetes";
} else if (glucosa >= 126) {
    diagnosticoGlucosa.textContent = "Probable Diabetes";
} else {
    diagnosticoGlucosa.textContent = "Valor no válido";
}

// Diagnóstico para Edad

const edad = parseInt(document.getElementById("edad").value);
const diagnosticoEdad = document.getElementById("diagnostico-edad");
if (edad < 5) {
    diagnosticoEdad.textContent = "Primera Infancia";
} else if (edad >= 5 && edad <= 12) {
    diagnosticoEdad.textContent = "Infancia";
} else if (edad > 11 && edad <=18) {
    diagnosticoEdad.textContent = "Adolescente";
} else if (edad > 18 && edad <=26) {
    diagnosticoEdad.textContent = "Joven";
} else if (edad > 18 && edad <=26) {
    diagnosticoEdad.textContent = "Joven";
} else if (edad > 26 && edad <=59) {
    diagnosticoEdad.textContent = "Adultez";
} else if (edad > 59 && edad <=100) {
    diagnosticoEdad.textContent = "Adulto Mayor";
} else {
    diagnosticoGlucosa.textContent = "Valor no válido";
}
// Diagostico para colesterol
const colesterol = parseInt(document.getElementById("colesterol").value);
const diagnosticoColesterol = document.getElementById("diagnostico-colesterol");
if (colesterol < 200) {
    diagnosticoColesterol.textContent = "Normal";
} else if (colesterol >= 200 && colesterol < 240) {
    diagnosticoColesterol.textContent = "Colesterol Elevado";
} else {
    diagnosticoColesterol.textContent = "Colesterol Alto";
}

// Ejemplo para frecuencia cardíaca
const frecuencia = parseInt(document.getElementById("frecuenciaCardiaca").value);
const diagnosticoFrecuencia = document.getElementById("diagnostico-frecuencia");
if (frecuencia < 60) {
    diagnosticoFrecuencia.textContent = "Bradicardia";
} else if (frecuencia >= 60 && frecuencia <= 100) {
    diagnosticoFrecuencia.textContent = "Normal";
} else {
    diagnosticoFrecuencia.textContent = "Taquicardia";
}


  // Ejemplo para temperatura
  const temperatura = parseFloat(document.getElementById("temperatura").value);
const diagnosticoTemperatura = document.getElementById("diagnostico-temperatura");
if (temperatura < 36.1) {
    diagnosticoTemperatura.textContent = "Hipotermia";
} else if (temperatura >= 36.1 && temperatura <= 37.2) {
    diagnosticoTemperatura.textContent = "Normal";
} else {
    diagnosticoTemperatura.textContent = "Fiebre";
}


}
</script>

