/**
 * @author Adler Coelho Santos
 * @date 09/04/2016
 * @description This class is the controller of my index page 
 */
class FizzBuzz {

    /**
     * @parameters 
     *  i = initial value
     *  f = final value
     */
    constructor(i=1, f=100) {
        
        if (this._isValidNumber(i) && this._isValidNumber(f)) {
            this.ini   = i;
            this.final = f;

            this._aQuery = document.querySelector.bind(document); // AdlerQuery > jQuery hahahaha
            this._viewFizzBuzz = new ViewFizzBuzz(this._aQuery("#numbers"));

            this.start();
        }
    }

    // Verify if the number is multiple of 3
    _isMultipleOfThree(number) {
        return number % 3 == 0;
    }
    
    // Verify if the number is multiple of 5
    _isMultipleOfFive(number) {
        return number % 5 == 0;
    }

    // Verify if the number is multiple of 3 or 5
    _isMultipleOfBoth(number) {
        return this._isMultipleOfThree(number, false) && this._isMultipleOfFive(number, false);
    }

    // Verify if the number is valid or not
    _isValidNumber(number) {
        
        let _ret = false;
        if (number && !isNaN(number)) {
            _ret = true;
        } else {
            throw new Error(`The value "${number}" is not a valid number.`);
        }
        return _ret;
    }

    // Initialize array of numbers
    _startArrayOfNumbers() {
        this.multiples = new Array();        
        for (var i = this.ini; i <= this.final; i++) {
            this.multiples.push(i);
        }
    }
    
    // Start up the functions
    start() {
        this._startArrayOfNumbers();
        this.multiples.map((number) => {
            if (this._isMultipleOfBoth(number)) {
                this._viewFizzBuzz.render(number, "FizzBuzz");
            } else {
                if (this._isMultipleOfThree(number)) {
                   this._viewFizzBuzz.render(number, "Fizz");
                } else {
                    if (this._isMultipleOfFive(number)) {
                        this._viewFizzBuzz.render(number, "Buzz");                     
                    } else {
                        this._viewFizzBuzz.render(number);
                    }
                }
            }          
        });              
    }

}