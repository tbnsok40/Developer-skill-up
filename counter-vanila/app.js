let undoButton = document.getElementById("undoButton");
let addButton = document.getElementById("addButton");
let subButton = document.getElementById("subButton");
let redoButton = document.getElementById("redoButton");
let inputBox = document.getElementById("inputbox");
let valueBox = document.getElementById("valuebox");

let formerValue = 0;
let undoStack = [];
let redoStack = [];

const checkValidity = () => {
    if (!inputBox.value || isNaN(inputBox.value)) {
        alert("숫자만 입력 가능합니다");
        return false;
    } else {
        redoStack = [];
        redoButton.disabled = true;
        return true;
    }
};

const setValueBox = (num) => {
    valueBox.innerText = num;
};

const initInputBox = () => {
    inputBox.value = '';
};

const handlePlus = () => {
    if (checkValidity()) {
        setValueBox(parseInt(valueBox.innerText) + parseInt(inputBox.value));
        stackPush(undoStack, valueBox.innerText);
        checkUndo(undoStack);
    }
    initInputBox();
};

const handleMinus = () => {
    if (checkValidity()) {
        setValueBox(parseInt(valueBox.innerText) - parseInt(inputBox.value))
        stackPush(undoStack, valueBox.innerText)
        checkUndo(undoStack)
    }
    initInputBox();
};

const stackPush = (stack, num) => {
    stack.push(num)
}

const handleUndo = () => {
    let formerNum = undoStack.pop();
    stackPush(redoStack, formerNum)
    checkRedo()
    checkUndo(undoStack);
};

const checkUndo = (undoStack) => {
    if (undoStack.length === 0) {
        valueBox.innerText = 0;
        undoButton.disabled = true;
    } else {
        undoButton.disabled = false;
        setValueBox(undoStack[undoStack.length - 1])
    }
};

const handleRedo = () => {
    let formerNum = redoStack.pop();
    stackPush(undoStack, formerNum)
    checkUndo(undoStack)
    setValueBox(formerNum)
    checkRedo();
};

const checkRedo = () => {
    redoButton.disabled = redoStack.length <= 0;
};

addButton.onclick = handlePlus;
subButton.onclick = handleMinus;
undoButton.onclick = handleUndo;
redoButton.onclick = handleRedo;

// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무시 되되고 input의 값은 없어진다.(정수만 입력할 수 있다.)

// undo를 클릭하면 이전 값으로 돌아간다. undo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// redo를 클릭하면 이후 값으로 되돌린다. redo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

// input에 유효한 숫자를 입력하고 +, - 버튼을 클릭했을때 이후 값들은 없어지고 Redo 버튼은 비활성화된다.
// -> 1 입력 후 + : 결과값 1
// -> 2 입력 후 + : 결과값 3
// -> 3 입력 후 + : " 결과값 6
// -> undo 버튼 : 결과값 3
// -> 4 입력 후 + : 결과값 7
// -> undo 버튼 : 결과값 3
// -> undo 버튼 : 결과값 1
// -> undo 버튼 : 결과갑 0 -> undo 버튼 비활성화

// 입력 후에 리두는 무조건 비활성화 ==> 상태의 최전선에선 redo 비활성화

// 잘하려고 하면 할 것이 많다 = > input값 예외처리 해줄 것: 문자가 입력됐을 때 어떻게 처리할 지 =>
// undo가 비활성화 될 조건은 valueStack이 None일 때
