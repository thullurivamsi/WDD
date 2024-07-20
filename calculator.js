let pr_data = document.getElementById("presentData");
let pa_data = document.getElementById("pastData");
let err_msg = document.getElementById("errorMsg");

// let int=document.getElementById("check");
// let g=window.getComputedStyle(int);
// console.log(g.width, g.height);


pr_data.textContent = "";
pa_data.textContent = "";

let count_br1 = 0;
let count_br2 = 0;


function enter_data(d) {
    let t = pr_data.textContent;

    if (t === "" && ")+×÷^".includes(d)) {
        return;
    }
    if ("+-×÷^".includes(d) && "+-×÷^".includes(t.at(-1))) {
        pr_data.textContent = t.slice(0, t.length - 1);
    } else if (d === "(" && !("+-^×÷(".includes(t.at(-1))) && t !== "") {
        return;
    } else if (d === ")" && t === "" && "+-×÷^(".includes(t.at(-1))) {
        return;
    } else if (t.at(-1) === ")" && !("+-^×÷)".includes(d))) {
        return;
    } else if (d === "." && t.at(-1) === ".") {
        return;
    }

    if (d === "(") {
        count_br1 += 1;
    } else if (d === ")") {
        count_br2 += 1;
    }

    if (pr_data.textContent === "" && "+×÷^".includes(d)) {
        pr_data.textContent = "";
        return;
    }

    err_msg.textContent = "";
    pr_data.textContent += d;
}



function back_space() {
    let t = pr_data.textContent;
    if (t.at(-1) === "(") {
        count_br1 -= 1;
    } else if (t.at(-1) === ")") {
        count_br2 -= 1;
    }
    err_msg.textContent = "";
    pr_data.textContent = t.slice(0, t.length - 1);
}

function clear() {
    pr_data.textContent = "";
    pa_data.textContent = "";
    err_msg.textContent = "";
    count_br1 = 0;
    count_br2 = 0;
}

function expression(exp) {
    let d = [];
    let t = "";
    exp = (exp[0] === "-") ? 0 + exp : exp;
    for (let i of exp) {
        if ("0123456789.".includes(i)) {
            t += i;
        } else if ("+-×÷)^".includes(i)) {
            if (d.length > 0 && d.at(-1) === ")") {
                d.push(i);
                continue;
            } else if (d.at(-1) === "(" && i === "-" && t === "") {
                t = "-";
                continue;
            }
            t.includes(".") ? d.push(parseFloat(t)) : d.push(parseInt(t));
            d.push(i);
            t = "";
        } else if (i === "(") {
            d.push(i);
        }
    }
    if (t !== "") {
        t.includes(".") ? d.push(parseFloat(t)) : d.push(parseInt(t));
    }
    return d;
}

function arthematic(a, b, o) {
    if (o === "-") {
        return a - b;
    }
    if (o === "+") {
        return a + b;
    }
    if (o === "×") {
        return a * b;
    }
    if (o === "÷") {
        return a / b;
    }
    if (o === "^") {
        return a ** b;
    }
    return "errror";
}

function solve(x) {
    let a = 0;
    let b = 0;
    let n = [];
    let o = [];
    let p = {
        "-": 1,
        "+": 1,
        "×": 2,
        "÷": 2,
        "^": 3,
        ")": 4,
        "(": 4
    };
    for (let i of x) {
        //console.log("n=",...n,", o=",...o);
        if (typeof i === "string") {
            if (o.length === 0) {
                o.push(i);
            } else if (i === "(") {
                o.push(i);
            } else if (i === ")") {
                let v = o.pop();
                while (v !== "(") {
                    b = n.pop();
                    a = n.pop();
                    n.push(arthematic(a, b, v));
                    v = o.pop();
                }
            } else if (p[o.at(-1)] < p[i] || p[o.at(-1)] === "(") {
                o.push(i);
            } else {
                while (o.length > 0 && o.at(-1) !== "(" && p[i] <= p[o.at(-1)]) {
                    b = n.pop();
                    a = n.pop();
                    n.push(arthematic(a, b, o.pop()));
                }
                o.push(i);
            }
        } else {
            n.push(i);
        }
    }
    //console.log("n=",...n,", o=",...o);
    while (o.length > 0) {
        b = n.pop();
        a = n.pop();
        n.push(arthematic(a, b, o.pop()));
    }
    //console.log("n=",...n,", o=",...o); 
    return n[0];
}

function calculate() {
    let expr = pr_data.textContent;
    if ("+-×÷^".includes(expr.at(-1))) {
        err_msg.textContent = "Incomplete Expression.";
        return;
    }
    if (count_br1 === count_br2) {
        let answer = solve(expression(expr));
        console.log(answer);
        pa_data.textContent = expr;
        pr_data.textContent = answer;
        return;
    } else if (count_br1 > count_br2) {
        err_msg.textContent = "Expression incomplete, unmatched bracket count '(' > ')'.";
    } else {
        err_msg.textContent = "Expression incomplete, unmatched bracket count '(' < ')'.";
    }
}

document.getElementById("b-clear").addEventListener("click", clear);
document.getElementById("b-(").addEventListener("click", function() {
    enter_data("(");
});
document.getElementById("b-)").addEventListener("click", function() {
    enter_data(")");
});
document.getElementById("b-bs").addEventListener("click", back_space);
document.getElementById("b-÷").addEventListener("click", function() {
    enter_data("÷");
});
document.getElementById("b-7").addEventListener("click", function() {
    enter_data(7);
});
document.getElementById("b-8").addEventListener("click", function() {
    enter_data(8);
});
document.getElementById("b-9").addEventListener("click", function() {
    enter_data(9);
});
document.getElementById("b-×").addEventListener("click", function() {
    enter_data("×");
});
document.getElementById("b-4").addEventListener("click", function() {
    enter_data(4);
});
document.getElementById("b-5").addEventListener("click", function() {
    enter_data(5);
});
document.getElementById("b-6").addEventListener("click", function() {
    enter_data(6);
});
document.getElementById("b--").addEventListener("click", function() {
    enter_data("-");
});
document.getElementById("b-1").addEventListener("click", function() {
    enter_data(1);
});
document.getElementById("b-2").addEventListener("click", function() {
    enter_data(2);
});
document.getElementById("b-3").addEventListener("click", function() {
    enter_data(3);
});
document.getElementById("b-+").addEventListener("click", function() {
    enter_data("+");
});
document.getElementById("b-.").addEventListener("click", function() {
    enter_data(".");
});
document.getElementById("b-0").addEventListener("click", function() {
    enter_data(0);
});
document.getElementById("b-^").addEventListener("click", function() {
    enter_data("^");
});
document.getElementById("b-=").addEventListener("click", calculate);


document.body.addEventListener("keydown", function(event) {
    let key = event.key;
    if (key === "C") {
        document.getElementById("b-clear").click();
        return;
    }
    if (key === "(") {
        document.getElementById("b-(").click();
        return;
    }
    if (key === ")") {
        document.getElementById("b-)").click();
        return;
    }
    if (key === "Backspace") {
        document.getElementById("b-bs").click();
        return;
    }
    if (key === "/") {
        document.getElementById("b-÷").click();
        return;
    }
    if (key === "7") {
        document.getElementById("b-7").click();
        return;
    }
    if (key === "8") {
        document.getElementById("b-8").click();
        return;
    }
    if (key === "9") {
        document.getElementById("b-9").click();
        return;
    }
    if (key === "*") {
        document.getElementById("b-×").click();
        return;
    }
    if (key === "4") {
        document.getElementById("b-4").click();
        return;
    }
    if (key === "5") {
        document.getElementById("b-5").click();
        return;
    }
    if (key === "6") {
        document.getElementById("b-6").click();
        return;
    }
    if (key === "-") {
        document.getElementById("b--").click();
        return;
    }
    if (key === "1") {
        document.getElementById("b-1").click();
        return;
    }
    if (key === "2") {
        document.getElementById("b-2").click();
        return;
    }
    if (key === "3") {
        document.getElementById("b-3").click();
        return;
    }
    if (key === "+") {
        document.getElementById("b-+").click();
        return;
    }
    if (key === ".") {
        document.getElementById("b-.").click();
        return;
    }
    if (key === "0") {
        document.getElementById("b-0").click();
        return;
    }
    if (key === "^") {
        document.getElementById("b-^").click();
        return;
    }
    if (key === "=") {
        document.getElementById("b-=").click();
        return;
    }
});