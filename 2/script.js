// El coche no arranca

function solucionarProblema () {
    const vive = prompt("¿Vives cerca? (Si/No)").toLowerCase().trim();

    if (vive === "si" || vive === "sí") {
        const ganas = prompt("¿Tienes ganas de caminar? (Si/No)").toLowerCase().trim();

        if (ganas ==="si" || ganas === "sí") {
        alert("Te vas andando y ya lo arreglarás mañana");
        return;
       } 
    }

// Si no vive cerca o no tiene ganas de caminar

const tieneGasolina = prompt ("¿Tienes gasolina? (sí/no)").trim().toLowerCase();
if (tieneGasolina === "no") {
    const dinero = prompt ("¿Tienes dinero para gasolina? (sí/no)").trim().toLowerCase();
    if (dinero === "si" || dinero === "sí") {
        alert ("Poner gasolina");
        } else {
            alert("Vas en metro");
        }
        return;
}

// Si tiene gasolina

const tieneBateria = prompt ("¿Tiene batería? (sí/no)").trim().toLowerCase();
if (tieneBateria === "no") {
    alert("Recargar batería");
} else {
    alert("Pásate por el mecánico");
    }
}

solucionarProblema();