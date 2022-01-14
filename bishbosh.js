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

        Print = ()=> this.#evaluateArray().join(', ');
            
    }

    function run() {
        const bishDivider = 3;
        const boshDivider = 4;
        const maxValue = 100;

        const bishBosh = new BishBosh(bishDivider, boshDivider, maxValue)

        console.log(bishBosh.Print());

    }

    run();

})(window.bish_bosh = window.bish_bosh || {});

