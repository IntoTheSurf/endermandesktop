let counter = 0;
let counterDiagonal = 0;
let trionum = 3;
let dirbr = 4;

function nextBlock() {
    if (counter == 3) {
        document.getElementById("dirbrcubenext4").style.visibility = "visible";
        counter = 4;
    }
    if (counter == 2) {
        document.getElementById("dirbrcubenext3").style.visibility = "visible";
        counter = 3;
    }

    if (counter == 1) {
        document.getElementById("dirbrcubenext2").style.visibility = "visible";
        counter = 2;
    }
    if (counter == 0) {
        document.getElementById("dirbrcubenext1").style.visibility = "visible";
        counter = 1;
    }
}

function nextBlockDiagonal() {
    if (counterDiagonal == 5) {
        document.getElementById("cellc7").style.visibility = "visible";
        counterDiagonal = 6;
    }
    if (counterDiagonal == 4) {
        document.getElementById("cellc6").style.visibility = "visible";
        counterDiagonal = 5;
    }
    if (counterDiagonal == 3) {
        document.getElementById("cellc5").style.visibility = "visible";
        counterDiagonal = 4;
    }
    if (counterDiagonal == 2) {
        document.getElementById("cellc4").style.visibility = "visible";
        counterDiagonal = 3;
    }

    if (counterDiagonal == 1) {
        let i = 0;
        document.getElementById("cellc3").style.visibility = "visible";
        counterDiagonal = 2;


    }
    if (counterDiagonal == 0) {
        document.getElementById("cellc2").style.visibility = "visible";
        counterDiagonal = 1;
    }
}

function nextBlockDiagonalBrWi(y) {
    if(y==1){
        x = 100;
    }

    if (y==2){
        x = 85;
    }

    if (counterDiagonal == 2) {
        document.getElementById("cellc6").style.visibility = "visible";
        document.getElementById("cellc7").style.visibility = "visible";
    }

    if (counterDiagonal == 1) {

        let i = 0;
        document.getElementById("cellc4").style.visibility = "visible";
        counterDiagonal = 1;
        setTimeout(function () {
            document.getElementById("cellc5").style.visibility = "visible";

        }, x);

        counterDiagonal = 2;

    }
    if (counterDiagonal == 0) {
        let i = 0;
        document.getElementById("cellc2").style.visibility = "visible";
        counterDiagonal = 1;
        setTimeout(function () {
            document.getElementById("cellc3").style.visibility = "visible";

        }, x);

        counterDiagonal = 1;
    }
}

function resetBridge(i) {
    if (i == 1) {
        var elements = document.getElementsByClassName('dircube');
        for (var i in elements) {
            i++;
            if (elements.hasOwnProperty(i)) {
                elements[i].style.visibility = 'hidden';
                counter = 0;
            }
        }
    }

    if (i == 2) {

        var elements = document.getElementsByClassName('cellc');
        for (var i in elements) {
            i++;
            if (elements.hasOwnProperty(i)) {
                elements[i].style.visibility = 'hidden';
                counterDiagonal = 0;
            }
        }
    }

    if (i == 3) {
        setTimeout(function () {
            document.getElementById("dirbrcubenext4").style.visibility = "hidden";
        }, 10);
        setTimeout(function () {
            document.getElementById("dirbrcubenext3").style.visibility = "hidden";
        }, 150);
        setTimeout(function () {
            document.getElementById("dirbrcubenext2").style.visibility = "hidden";
        }, 300);
        setTimeout(function () {
            document.getElementById("dirbrcubenext1").style.visibility = "hidden";
        }, 450);
        counter = 0;
    }

    if (i == 4) {
        x = 150;
        
        setTimeout(function () {
            document.getElementById("cellc7").style.visibility = "hidden";
        }, x);
        setTimeout(function () {
            document.getElementById("cellc6").style.visibility = "hidden";
        }, x+100);
        setTimeout(function () {
            document.getElementById("cellc5").style.visibility = "hidden";
        }, (2*x+100));
        setTimeout(function () {
            document.getElementById("cellc4").style.visibility = "hidden";
        }, (3*x));
        setTimeout(function () {
            document.getElementById("cellc3").style.visibility = "hidden";
        }, (4*x+50));
        setTimeout(function () {
            document.getElementById("cellc2").style.visibility = "hidden";
        }, (4*x+100));
        counterDiagonal = 0;
    }
}
function addRow(i) {

    if (i == 1) {
        if (dirbr == 4) {
            const html = `
            <div class="dircube" id="dirbrcubenext4" onclick="nextBlock()"></div>`;
            const two = document.querySelector('.directbridge #dirbrcubenext3');

            // Using insertAdjacentHTML to add the HTML before the two element
            two.insertAdjacentHTML('afterend', html);
            dirbr++;
        }
        if (dirbr == 3) {
            const html = `
            <div class="dircube" id="dirbrcubenext3" onclick="nextBlock()"></div>`;
            const two = document.querySelector('.directbridge #dirbrcubenext2');

            // Using insertAdjacentHTML to add the HTML before the two element
            two.insertAdjacentHTML('afterend', html);
            dirbr++;
        }
        if (dirbr == 2) {
            const html = `
            <div class="dircube" id="dirbrcubenext2" onclick="nextBlock()"></div>`;
            const two = document.querySelector('.directbridge #dirbrcubenext1');

            // Using insertAdjacentHTML to add the HTML before the two element
            two.insertAdjacentHTML('afterend', html);
            dirbr++;
        }
        
        
    }


    if (i == 2) {
        if (trionum == 3) {
            const html = `
            <div class = "trio" id = "trio4">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
                <div class = "cellc" id="cellc7" onclick="nextBlockDiagonal()"></div>
            </div>`;

            // Grab the element containing your "two" class
            const two = document.querySelector('.diabrcontainer #trio3');

            // Using insertAdjacentHTML to add the HTML before the two element
            two.insertAdjacentHTML('afterend', html);
            trionum = 4;
        }

        if (trionum == 2) {
            const html = `
            <div class = "trio" id = "trio3">
                <div class="cell">
                  <p></p>
                </div>
                <div class="cell">
                    <p></p>
                </div>
                <div class="cellc" id="cellc5" onclick="nextBlockDiagonal()">
                    <p></p>
                </div>
                <div class="cellc" id="cellc6" onclick="nextBlockDiagonal()">
                    <p></p>
                </div>
                
            </div>`;

            // Grab the element containing your "two" class
            const two = document.querySelector('.diabrcontainer #trio2');

            // Using insertAdjacentHTML to add the HTML before the two element
            two.insertAdjacentHTML('afterend', html);
            trionum = 3;
        }

        
    }

}

function removeRow(i) {
    if (i == 1) {
        if (dirbr == 4) {
            const element = document.getElementById("dirbrcubenext3");
            element.remove();
            if (counter == 3) {
                counter = 2;
            }
            dirbr = 3;
        }
        if (dirbr == 5) {
            const element = document.getElementById("dirbrcubenext4");
            element.remove();
            if (counter == 4) {
                counter = 2;
            }
            dirbr = 4;
        }
    }

    if (i == 2) {
        if (trionum == 3) {
            const element = document.getElementById("trio3");
            element.remove();
            if(counterDiagonal == 5 || counterDiagonal == 6){
            counterDiagonal = 4;
            }
            trionum = 2;
        }
        if (trionum == 4) {
            const element = document.getElementById("trio4");
            element.remove();
            if(counterDiagonal == 7){
            counterDiagonal = 6;
            }
            trionum = 3;
        }
        
    }


}