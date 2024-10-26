let speed = Number(prompt("Enter the speed:"));
let color;
let grade;

switch (true) {
    case (speed >= 0 && speed <= 39): 
        color = 'RED';
        grade = 'F';
        console.log('FAIL, ' + 'Color: ' + color + ', Grade: ' + grade);
        break;

    case (speed >= 40 && speed <= 49): 
        color = 'CRIMSON';
        grade = 'E';
        console.log('Pass, ' + 'Color: ' + color + ', Grade: ' + grade);
        break;

    case (speed >= 50 && speed <= 59): 
        color = 'BROWN';
        grade = 'D';
        console.log('Below Average, ' + 'Color: ' + color + ', Grade: ' + grade);
        break;

    case (speed >= 60 && speed <= 64): 
        color = 'DARK GRAY';
        grade = 'C';
        console.log('Average, ' + 'Color: ' + color + ', Grade: ' + grade);
        break;

    case (speed >= 65 && speed <= 69): 
        color = 'GRAY';
        grade = 'B';
        console.log('Satisfactory, ' + 'Color: ' + color + ', Grade: ' + grade);
        break;

    case (speed >= 70 && speed <= 74): 
        color = 'BRONZE';
        grade = 'A-';
        console.log('Very Good, ' + 'Color: ' + color + ', Grade: ' + grade);
        break;

    case (speed >= 75 && speed <= 79): 
        color = 'SILVER';
        grade = 'A';
        console.log('Excellent, ' + 'Color: ' + color + ', Grade: ' + grade);
        break;

    case (speed >= 80 && speed <= 100): 
        color = 'GOLD';
        grade = 'A+';
        console.log('Outstanding, ' + 'Color: ' + color + ', Grade: ' + grade);
        break;

    default:
        console.log('Invalid.');
        break;
}