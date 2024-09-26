<script>
        function calcularDiagnostico() {
            // Diagnóstico para Presión Sistólica
            const presion = parseInt(document.getElementById("presionSistolica").value);
            const diagnosticoPresion = document.getElementById("diagnostico-presion");
            if (presion < 120) {
                diagnosticoPresion.textContent = "Normal";
            } else if (presion >= 120 && presion <= 129) {
                diagnosticoPresion.textContent = "Elevada";
            } else if (presion >= 130 && presion <= 139) {
                diagnosticoPresion.textContent = "Etapa 1 Hipertensión";
            } else if (presion >= 140 && presion <= 179) {
                diagnosticoPresion.textContent = "Etapa 2 Hipertensión";
            } else if (presion >= 180) {
                diagnosticoPresion.textContent = "Crisis Hipertensiva";
            } else {
                diagnosticoPresion.textContent = "Valor no válido";
            }
            
            // Diagnóstico para Glucosa
            const glucosa = parseInt(document.getElementById("glucosa").value);
            const diagnosticoGlucosa = document.getElementById("diagnostico-glucosa");
            if (glucosa < 80) {
                diagnosticoGlucosa.textContent = "Hipoglucemia";
            } else if (glucosa >= 80 && glucosa <= 99) {
                diagnosticoGlucosa.textContent = "Normal";
            } else if (glucosa >= 100 && glucosa <= 120) {
                diagnosticoGlucosa.textContent = "Hiperglucemia";
            } else if (glucosa > 120) {
                diagnosticoGlucosa.textContent = "Diabetes";
            } else {
                diagnosticoGlucosa.textContent = "Valor no válido";
            }

            // Puedes agregar diagnósticos para las otras medidas aquí
            // Ejemplo para colesterol
            const colesterol = parseInt(document.getElementById("colesterol").value);
            const diagnosticoColesterol = document.getElementById("diagnostico-colesterol");
            if (colesterol < 200) {
                diagnosticoColesterol.textContent = "Normal";
            } else if (colesterol >= 200 && colesterol < 240) {
                diagnosticoColesterol.textContent = "Límite Alto";
            } else {
                diagnosticoColesterol.textContent = "Alto";
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

            // Ejemplo para IMC
            const imcValor = parseFloat(document.getElementById("imc").value);
            const diagnosticoIMC = document.getElementById("diagnostico-imc");
            if (imcValor < 18.5) {
                diagnosticoIMC.textContent = "Bajo Peso";
            } else if (imcValor >= 18.5 && imcValor < 24.9) {
                diagnosticoIMC.textContent = "Peso Normal";
            } else if (imcValor >= 25 && imcValor < 29.9) {
                diagnosticoIMC.textContent = "Sobrepeso";
            } else {
                diagnosticoIMC.textContent = "Obesidad";
            }

            // Ejemplo para presión diastólica
            const presionDiastolica = parseInt(document.getElementById("presionDiastolica").value);
            const diagnosticoDiastolica = document.getElementById("diagnostico-diastolica");
            if (presionDiastolica < 80) {
                diagnosticoDiastolica.textContent = "Normal";
            } else if (presionDiastolica >= 80 && presionDiastolica <= 89) {
                diagnosticoDiastolica.textContent = "Etapa 1 Hipertensión";
            } else {
                diagnosticoDiastolica.textContent = "Etapa 2 Hipertensión";
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
