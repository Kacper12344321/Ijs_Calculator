
function calculateRecipe() {

    // Get all input values
    const sugar = Number(document.getElementById("sugar").value);
    const fat = Number(document.getElementById("fat").value);
    const vvmb = Number(document.getElementById("vvmb").value);
    const dry = Number(document.getElementById("dry").value);
    const pod = Number(document.getElementById("pod").value);
    const pac = Number(document.getElementById("pac").value);

    const fields = ["sugar", "fat", "vvmb", "dry", "pod", "pac"];

    // Check whether all fields are filled in
    for (const field of fields) {
        const input = document.getElementById(field);

        if (input.value.trim() === "" || !Number.isFinite(Number(input.value))) {
            alert("Vul alle velden correct in!");
            input.focus();
            return;
        }
    }

    // Check ingredient percentages
    if (sugar < 0 || fat < 0 || vvmb < 0 || dry < 0) {
        alert("Percentages mogen niet negatief zijn.");
        return;
    }

    const ingredientTotal = sugar + fat + vvmb + dry;

    if (ingredientTotal > 100) {
        alert("De totale ingrediëntenpercentages mogen niet hoger zijn dan 100%.");
        return;
    }

    // Show results
    document.getElementById("results").hidden = false;

    document.getElementById("ingredientTotal").textContent =
        "Totaal ingegeven ingrediënten: " +
        ingredientTotal.toFixed(2) + "%";

    document.getElementById("podResult").textContent =
        "Gewenste POD: " + pod;

    document.getElementById("pacResult").textContent =
        "Gewenste PAC: " + pac;

}
