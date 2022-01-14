"use strict";

(function (w) {
    const bishDivider = 3;
    const boshDivider = 4;
    const maxValue = 100;

    const bish_boshEnum = {
        bish: { value: bishDivider, text: "Bish" },
        bosh: { value: boshDivider, text: "Bosh" }
    }

    function bish_bosh(number) {
        let result = [];
        const bish = (number % bish_boshEnum.bish.value) === 0;
        const bosh = (number % bish_boshEnum.bosh.value) === 0;

        if (!(bish || bosh))
            result.push(number);
        else {
            if (bish)
                result.push(bish_boshEnum.bish.text);
            if (bosh)
                result.push(bish_boshEnum.bosh.text);
        }

        return result.join('_');
    }


    function run() {
        let resultArray = [];
        for (let index = 1; index < maxValue; index++) {
            resultArray.push(bish_bosh(index));
        }
        const result = resultArray.join(', ');
        return (result);
    }

    console.log(run());

})(window.bish_bosh = window.bish_bosh || {});
