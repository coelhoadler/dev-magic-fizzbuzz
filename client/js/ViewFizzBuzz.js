/**
 * @author Adler Coelho Santos
 * @date 09/04/2016
 * @description This class is the view of my index page 
 */
class ViewFizzBuzz {

    constructor(container, counters) {
        this._container = container;
        this._counters  = counters;
    }

    // Render the button on HTML
    render(number, label=null) {
        
        let button = this._createButton(number, label);
        this._container.appendChild(button);              
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

    renderMultiples(noMultiple, multipleOfThree, multipleOfFive, multipleOfBoth) {
        this._counters.innerHTML = `
            <span class="label label-default">Não múltiplo (${noMultiple})</span>
            <span class="label label-primary">Múltiplo de 3 (${multipleOfThree})</span>
            <span class="label label-info">Múltiplo de 5 (${multipleOfFive})</span>
            <span class="label label-success">Múltiplo de 3 e 5 (${multipleOfBoth})</span>        
        `;
    }
}