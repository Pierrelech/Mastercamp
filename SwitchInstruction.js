
  /**
 * Determines the instruction its number.
 * @param {number} dayNumber - The number representing the instruction (1, 2,...).
 * @returns {string} - The type of the instruction (String) based number.
 */
  export function getDayType(dayNumber) {
    let instructions=[];
    switch (dayNumber) {
      case 1:
        instructions.push("Check the numbers of users");
        break;
      case 2:
        instructions.push("You can see that this number is issue of the database");
        break;
      case 3:
        instructions.push("The next step of the project is to create a new user");
        break;
      case 4:
        instructions.push("if you complete the formular, it will create a new user in the database");
        break;
      case 5:
        instructions.push("You have the factorial value increasing by 1 every 5 seconds");
        break;
      case 6:
        instructions.push("Complex Array is right under");
        break;
      case 7:
        instructions.push("You can add to Car class a new Car by using the formular");
        break;
      default:
        instructions.push("houla bizarre");
    }
    return instructions;
  }
  
  // Example usage:
  console.log(getDayType(3)); 
  console.log(getDayType(6)); 
  console.log(getDayType(8)); 