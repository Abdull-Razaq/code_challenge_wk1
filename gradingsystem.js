const prompt = require('prompt-sync')();

// Prompts one to input student marks.
let grade = prompt("Input student marks:");

if (grade >= 1 && grade <=100) {
    switch (true) {
	// Student marks greater than 79
	case grade > 79:
    console.log ("Your score is A");
		break;
	// Student marks greater than 60 
	case grade >= 60:
    console.log ("Your score is B");
		break;
	// Student marks greater than 49
	case grade >= 49:
    console.log ("Your score is C");
		break;
	// Student marks greater than 40
	case grade >= 40:
    console.log ("Your score is D");
		break;
	// Student less than 40
	default:
    console.log("Your score is E");
}
  } else {
    console.log("No student marks to be graded.");
  }
  