// Task 1 - Base Structure Setup
document.addEventListener("DOMContentLoaded"), () => {
    const riskDashboard = document.getElementById("riskDashboard");
    console.log("Risk Dashboard Loaded");
}

// Task 2 - Adding Risk Items
document.getElementById("riskForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("riskName").value;
    const level = document.getElementById("riskLevel").value;
    const dept = document.getElementById("department").value;

    addRiskItem(name, level, dept);
    this.reset();
});

// Task 2 - Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Employee Retention", "Low", "HR");

 // Task 3 - Removing Risk Items (Resolve button)
 riskCard.querySelector(".resolveBtn").addEventListener("click", function() {
    riskDashboard.removeChild(riskCard);
});

riskDashboard.appendChild(riskCard);

// Task 4 - Categorizing Risks by Level (Assign colors)
if (riskLevel === "Low") riskCard.classList.add("low");
if (riskLevel === "Medium") riskCard.classList.add("medium");
if (riskLevel === "High") riskCard.classList.add("high");

riskCard.innerHTML = `
    <strong>${riskName}</strong> <br>
    Risk Level: ${riskLevel} <br>
    Department: ${department}
    <button class="resolveBtn">Resolve</button>
`;

// Task 5 - Implementing Bulk Updates
document.getElementById("increaseRisk").addEventListener("click", function() {
    document.querySelectorAll(".riskCard").forEach(card => {
        let currentLevel = card.classList.contains("low") ? "Low" :
                           card.classList.contains("medium") ? "Medium" : "High";
        let newLevel = currentLevel === "Low" ? "Medium" : currentLevel === "Medium" ? "High" : "High";

        card.classList.remove("low", "medium", "high");
        if (newLevel === "Medium") card.classList.add("medium");
        if (newLevel === "High") card.classList.add("high");

        card.innerHTML = card.innerHTML.replace(`Risk Level: ${currentLevel}`, `Risk Level: ${newLevel}`);
    });
});

// Task 6 - Handling Event Propagation (Prevent unintended clicks)
riskCard.addEventListener("click", (e) => e.stopPropagation());