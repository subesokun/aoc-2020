import * as wasm from 'wasm-aoc';

function runSolution(inputFileTxt) {
    const elemSolution = document.getElementById('solution');
    if (inputFileTxt !== undefined) {
        const result = wasm.run_solution(inputFileTxt);
        elemSolution.innerHTML = result.join('<br/>');
    } else {
        console.error('could not read input.txt file');
    }    
}

function openFile(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        runSolution(reader.result);
    };
    reader.readAsText(input.files[0]);
};
window.openFile = openFile;

