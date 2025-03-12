function calculateNHIF(grossSalary) {
    let nhif;

    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
    else nhif = 1700;

    return nhif;
}

function calculateNSSF(grossSalary) {
    let nssf;

    if (grossSalary <= 6000) {
        nssf = grossSalary * 0.06;
    } else if (grossSalary <= 18000) {
        nssf = (6000 * 0.06) + ((grossSalary - 6000) * 0.06);
    } else {
        nssf = 1080;
    }

    return nssf;
}

function calculatePAYE(taxableIncome) {
    let tax;

    if (taxableIncome <= 24000) {
        tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        tax = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
    } else {
        tax = (24000 * 0.1) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.3);
    }

    return tax;
}

function netSalaryCalculator(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const nssf = calculateNSSF(grossSalary);
    const taxableIncome = grossSalary - nssf;
    const payee = calculatePAYE(taxableIncome);
    const nhif = calculateNHIF(grossSalary);
    const netSalary = grossSalary - (nssf + payee + nhif);

    console.log("Gross Salary: Ksh. " + grossSalary);
    console.log("NSSF Deduction: Ksh. " + nssf);
    console.log("Taxable Income: Ksh. " + taxableIncome);
    console.log("PAYE (Tax): Ksh. " + payee);
    console.log("NHIF Deduction: Ksh. " + nhif);
    console.log("Net Salary: Ksh. " + netSalary);
}

netSalaryCalculator(50000, 10000);
