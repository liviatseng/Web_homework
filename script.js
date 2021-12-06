const a_mass = prompt("Enter friend A's mass (in kg).");
const a_height = prompt("Enter friend A's height (in meter)");
const b_mass = prompt("Enter friend B's mass (in kg).");
const b_height = prompt("Enter friend B's height (in meter)");

const a_bmi = a_mass / (a_height * a_height);
const b_bmi = b_mass / (b_height * b_height);

if(a_bmi < 18.5){
    document.write("Friend A's BMI Weight Status: Underweight <br>");
}
else if(a_bmi >= 18.5 && a_bmi <=24.9){
    document.write("Friend A's BMI Weight Status: Normal <br>");
}
else if(a_bmi >= 25.0 && a_bmi <=29.9){
    document.write("Friend A's BMI Weight Status: Overweight <br>");
}else{
    document.write("Friend A's BMI Weight Status: Obese <br>");
}

if(b_bmi < 18.5){
    document.write("Friend B's BMI Weight Status: Underweight <br>");
}
else if(b_bmi >= 18.5 && b_bmi <=24.9){
    document.write("Friend B's BMI Weight Status: Normal <br>");
}
else if(b_bmi >= 25.0 && b_bmi <=29.9){
    document.write("Friend B's BMI Weight Status: Overweight <br>");
}else{
    document.write("Friend B's BMI Weight Status: Obese <br>");
}

if(a_bmi > b_bmi){
    document.write("<br>Friend A's BMI is higher than Friend B's BMI.");
}
else if(b_bmi > a_bmi){
    document.write("<br>Friend B's BMI is higher than Friend A's BMI.");
}else{
    document.write("<br>Friend A and Friend B have the same BMI.");
}