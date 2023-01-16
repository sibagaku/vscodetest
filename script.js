//変数
let str = "Hello World";
// console.log(str);
// // str = "こんにちは！";
// console.log(str);

//定数
const str2 = "おはよう";
// console.log(str2);

//配列
let array = ["いち", "にい", "さん", "よん"];
// console.log(array[2]);

//ループ文
// let index = 0;
// while (index < array.length) {
//     console.log(array[index]);
//     index++;
// }

//if else
// if (array.length > 5) {
//     console.log("おはよう");
// } else {
//     console.log("さよなら");
// }

//関数
const test = (arg) => {
    if (array.length > arg) {
        console.log("おはよう");
    } else {
        console.log("さよなら");
    }
}

//オブジェクト
const test2 = {
    color: "red",
    size: "small",
    level: 5,
    sample: () => {
        console.log("Hello");
    }
};

document.getElementsByTagName("button")[0].addEventListener("click", () => {
    alert("こんにちは！！"); 
    console.log(test2);   
});

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    btn.textContent = "変更";
    btn.style.color = "black";
    btn.style.fontWeight = "bold";
    btn.style.background = "red";
    console.log(btn.style);
});

const btn2 = document.getElementById("btn2");
const body = document.body;
btn2.addEventListener("click", () => {
    body.style.backgroundColor = "#f0f0f0";
});

const btn3 = document.getElementsByTagName("button")[3];
btn3.addEventListener("click", () => {
    btn3.remove();
})