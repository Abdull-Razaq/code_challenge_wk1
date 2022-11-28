/* A program to calculate an individual net salary by getting inputs 
 of Basic salary and benefits.
 CAlculate the PAYE, NHIF deductions, NSSF deductions, gross salary and net salary.

Formula : 
    (Basic Salary + Benefits) = Gross Salary
    Payee + Nhif + Nssf = Deductions
    Gross Salary - Deducations = Net Salary
    
*/ 

const prompt = require("prompt-sync")();

let basicSalary = prompt("Input your basic salary: ");
let benefits = prompt("Input your benefits: ");

// Calculation of gross salary.

const grossSalary = parseInt(basicSalary) + parseInt(benefits);

return grossSalary;


// P.A.Y.E calculations 

if (grossSalary < 24,000) {
    paye1 = grossSalary - (grossSalary * 0.1);
    paye = paye1;
    return paye;

    
} else if (24,000 > grossSalary <= 32,333) {
    paye1 = 24,000 * 0.1;
    paye2 = (32,333 - grossSalary)* 0.25;
    paye = paye1 + paye2;
    return paye;
    
} else{
    paye1 = 24,000 * 0.1;
    paye2 = (32,333 - grossSalary)* 0.25;
    paye3 = (grossSalary-32,333) * 0.3;
    paye = paye1 + paye2 + paye3;
    return paye;
    
}

const personalRelief = 2400;
let taxableAmount = paye - personalRelief;
return taxableAmount;

// NHIF calculations

if (grossSalary < 6000){
    nhif = 150;
 }else if (6000 <= grossSalary <= 7999){
    nhif = 300;
 }else if (8000<= grossSalary <= 11999){
    nhif = 400;
 }else if (12000<= grossSalary <= 19999){
    nhif = 500;
 }else if (15000<= grossSalary <= 11999){
    nhif = 600;
 }else if (20000<= grossSalary <= 24999){
    nhif = 750;
 }else if (25000<= grossSalary <= 29999){
    nhif = 850;
 }else if (30000<= grossSalary <= 34999){
    nhif = 900;
 }else if (35000<= grossSalary <= 39999){
    nhif = 950;
 }else if (40000<= grossSalary <= 44999){
    nhif = 1000;
 }else if (45000<= grossSalary <= 49999){
    nhif = 1100;
 }else if (50000<= grossSalary <= 59999){
    nhif = 1200;
 }else if (60000<= grossSalary <= 69999){
    nhif = 1300;
 }else if (70000<= grossSalary <= 79999){
    nhif = 1400;
 }else if (80000<= grossSalary <= 89999){
    nhif = 1500;
 }else if (90000<= grossSalary <= 99999){
    nhif = 400;
 }else {
    nhif = 1700;
 }

 return nhif;

//NSSF calculations
if (pensionablePay => 6,000) {
    tier1 = pensionablePay * 0.6;
    nssf = tier1;
    return nssf; 
} else if (6,000 > pensionablePay < 18,000) {
    tier2 =pensionablePay * 0.6;
    nssf = tier2;
    return nssf;

}else {
    return 0;
}

//Calculations of Net salary

let deductions = taxableAmount + nhif + nssf;
let netSalary = grossSalary - deductions;
return netSalary;



