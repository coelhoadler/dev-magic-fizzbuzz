/**
 * @author Adler Coelho Santos
 * @date 09/04/2016
 * @description This class is the controller of my index page 
 */
class ViewFizzBuzz {

    constructor(container) {
        this.container = container;
    }

    // Render the button on HTML
    render(number, label=null) {
        
        let button = this._createButton(number, label);
        this.container.appendChild(button);              
    }

    // Create a new button
    _createButton(number, label) {

        label = (label) ? label : number;
        let classButton = this._whatsTheColor(label);
        let button = document.createElement("button");

        button.addEventListener("click", () => alert(`Valor selecionado: ${number}`), false);  

        button.appendChild(document.createTextNode(label));
        button.setAttribute("class", "btn " + classButton);
        button.setAttribute("type", "button");
        button.setAttribute("value", number);
        console.log(button);

        return button;        
    }

    // Set the color of button
    _whatsTheColor(label) {
        let value = "btn-";
        if (!isNaN(label)) {
            value += "defalut";
        } else {
            if (label == "Fizz") value += "primary";
            if (label == "Buzz") value += "info";
            if (label == "FizzBuzz") value += "success";
        }

        return value;
    }
}