"use strict";

(function (w) {

    const BishBoshEnum = {
        Bish: "Bish",
        Bosh: "Bosh"
    }

    class BishBosh {
        #bishDivider;
        #boshDivider;
        #maxValue;

        constructor(bishDivider, boshDivider, maxValue) {
            this.#bishDivider = bishDivider;
            this.#boshDivider = boshDivider;
            this.#maxValue = maxValue;
        }

        #evaluate(number) {
            let result = [];
            const bish = (number % this.#bishDivider) === 0;
            const bosh = (number % this.#boshDivider) === 0;

            if (!(bish || bosh))
                result.push(number);
            else {
                if (bish)
                    result.push(BishBoshEnum.Bish);
                if (bosh)
                    result.push(BishBoshEnum.Bosh);
            }

            return result.join('_');
        }

        #evaluateArray() {
            let resultArray = [];
            for (let index = 1; index < this.#maxValue; index++) {
                resultArray.push(this.#evaluate(index));
            }
            return resultArray;
        }

        Print = () => this.#evaluateArray().join(', ');

    }

    const setError = (input, message) => {
        input.classList.remove('bg-success');
        input.classList.remove('text-light');
        input.classList.add('bg-danger');
        input.classList.add('text-light');
        
        input.nextElementSibling.innerText=message;

    }

    const setSuccess = input => {
        var hadError = input.classList.contains('bg-danger');
        input.classList.remove('bg-danger');
        input.classList.remove('text-light');

        if (hadError) {
            input.classList.add('bg-success');
            input.classList.add('text-light');

            input.nextElementSibling.innerText='';
        }

    }

    const validateNumber = (input) => {
        if (Number.parseInt(input.value) <= Number.parseInt(input.min)) {
            setError(input, `Värdet får inte vara mindre än ${input.min}.`);
            return false;
        } else {
            setSuccess(input)
            return true;
        }
    }

    const validate = (input) => {
        switch (input.type) {
            case 'number':
                if (validateNumber(input))
                    return true
                else
                    return false

            default:
                break;
        }
    }





    function run() {
        const bishInput = document.querySelector('#bish');
        const boshInput = document.querySelector('#bosh');
        const maxInput = document.querySelector('#max');

        const showBtn = document.querySelector('#show');
        const resultH = document.querySelector('[for=result]');
        const resultP = document.querySelector('#result');

        showBtn.addEventListener('click', function () {

            const bishDivider = bishInput.value;
            const boshDivider = boshInput.value;
            const maxValue = maxInput.value;

            validate(bishInput);
            validate(boshInput);
            validate(maxInput);
            const bishBosh = new BishBosh(bishDivider, boshDivider, maxValue)

            resultH.classList.remove("d-none");
            resultP.innerText = bishBosh.Print();
        });

    }


    run();

})(window.bish_bosh = window.bish_bosh || {});

