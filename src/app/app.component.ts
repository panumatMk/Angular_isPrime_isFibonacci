import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  column1: number;
  column2: string;
  column3: boolean;

  isPrime = num => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  isSquare = n => {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  isFibanacci = num => {
    if (
      this.isSquare(5 * (num * num) - 4) ||
      this.isSquare(5 * (num * num) + 4)
    ) {
      return true;
    } else {
      return false;
    }
  };

  enter() {
    if (this.column1 >= 0) {
      this.column1 = Math.round(this.column1);
    } else {
      this.column1 = 1;
    }
  }

  onChange() {
    const isPrime = this.isPrime(this.column1);
    const isFibanacci = this.isFibanacci(this.column1);
    console.log("isPrime ", isPrime);
    console.log("isFibanacci ", isFibanacci);
    if (isPrime && isFibanacci) {
      this.column3 = this.column2 && true;
    } else if (isPrime) {
      this.column3 = this.column2 === "isPrime";
    } else if (isFibanacci) {
      this.column3 = this.column2 === "isFibonacci";
    } else {
      this.column3 = false;
    }
  }
}
