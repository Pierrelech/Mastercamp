
import { getDayType } from './SwitchInstruction';
import { factorial } from './Factorial';
import { complexArray } from './json';
import Car from './CarClass';
import User from './UserClass';

export default {
name: 'json',
data() {
    return {
      dayNumber: 1,
      firstclick: true,
      n:0,
      factorialValue:1,
      complexArray:complexArray,
      Car:Car,
      newCar: {
        make: '',
        model: '',
        year: null,
      },
    }
  },
  computed: {
    message() {
      if (this.firstClick) {
        return "Please press Next button to continue";
      } else {
        return `Instruction : ${getDayType(this.dayNumber)}`;
      }
    },
  },
  methods: {
    nextDay() {
      if (this.firstClick) {
        this.firstClick = false;
      } else {
        this.dayNumber = this.dayNumber % 7 + 1;
      }
    },
    createCar() {
      const myCar = new this.Car(this.newCar.make, this.newCar.model, this.newCar.year);
      console.log(myCar);
      // Reset the form
      this.newCar = {
        make: '',
        model: '',
        year: null,
      };
  },
  },
  mounted() {
    setInterval(() => {
      this.n++;
      this.factorialValue = factorial(this.n);
      console.log(this.factorialValue);
    }, 5000);
  },
props: {
  
}}
