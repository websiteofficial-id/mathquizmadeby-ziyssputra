// =============================
// MATH QUIZ UN - QUESTIONS
// =============================

const TOTAL_QUESTION = 40;
const questions = [];

// -----------------------------
// Random
// -----------------------------

function rand(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

// -----------------------------
// Acak pilihan
// -----------------------------

function shuffle(arr){

    for(let i=arr.length-1;i>0;i--){

        let j=Math.floor(Math.random()*(i+1));

        [arr[i],arr[j]]=[arr[j],arr[i]];

    }

    return arr;

}

// -----------------------------
// Pilihan Ganda
// -----------------------------

function createOption(answer){

    let option=[answer];

    while(option.length<4){

        let fake=answer+rand(-20,20);

        if(fake<0) continue;

        if(fake===answer) continue;

        if(!option.includes(fake)){

            option.push(fake);

        }

    }

    shuffle(option);

    return{

        options:option,

        answer:option.indexOf(answer)

    };

}

// =============================
// PENJUMLAHAN
// =============================

function addition(){

    let a=rand(20,500);
    let b=rand(20,500);

    let ans=a+b;

    let data=createOption(ans);

    return{

        question:`${a} + ${b} = ...`,

        options:data.options,

        answer:data.answer

    };

}

// =============================
// PENGURANGAN
// =============================

function subtraction(){

    let a=rand(300,900);
    let b=rand(50,a);

    let ans=a-b;

    let data=createOption(ans);

    return{

        question:`${a} - ${b} = ...`,

        options:data.options,

        answer:data.answer

    };

}

// =============================
// PERKALIAN
// =============================

function multiplication(){

    let a=rand(2,25);
    let b=rand(2,20);

    let ans=a*b;

    let data=createOption(ans);

    return{

        question:`${a} × ${b} = ...`,

        options:data.options,

        answer:data.answer

    };

}

// =============================
// PEMBAGIAN
// =============================

function division(){

    let b=rand(2,20);

    let ans=rand(2,25);

    let a=b*ans;

    let data=createOption(ans);

    return{

        question:`${a} ÷ ${b} = ...`,

        options:data.options,

        answer:data.answer

    };

}

// =============================
// PERPANGKATAN
// =============================

function power(){

    let a=rand(2,10);

    let p=rand(2,3);

    let ans=a**p;

    let data=createOption(ans);

    return{

        question:`${a}<sup>${p}</sup> = ...`,

        options:data.options,

        answer:data.answer

    };

}

// =============================
// AKAR
// =============================

function root(){

    let a=rand(2,20);

    let ans=a;

    let data=createOption(ans);

    return{

        question:`√${a*a} = ...`,

        options:data.options,

        answer:data.answer

    };

}

// =============================
// KELIPATAN
// =============================

function multiple(){

    let angka=rand(2,12);

    let ke=rand(3,10);

    let ans=angka*ke;

    let data=createOption(ans);

    return{

        question:`Kelipatan ke-${ke} dari ${angka} adalah ...`,

        options:data.options,

        answer:data.answer

    };

}

// =============================
// FPB
// =============================

function gcd(a,b){

    while(b!==0){

        let t=b;

        b=a%b;

        a=t;

    }

    return a;

}

function fpb(){

    let a=rand(10,60);

    let b=rand(10,60);

    let ans=gcd(a,b);

    let data=createOption(ans);

    return{

        question:`FPB dari ${a} dan ${b} adalah ...`,

        options:data.options,

        answer:data.answer

    };

}

// =============================
// LUAS PERSEGI PANJANG
// =============================

function areaRectangle(){

    let p=rand(5,25);

    let l=rand(5,20);

    let ans=p*l;

    let data=createOption(ans);

    return{

        question:`Luas persegi panjang (p=${p} cm, l=${l} cm) adalah ...`,

        options:data.options.map(x=>x+" cm²"),

        answer:data.answer

    };

}

// =============================
// KELILING PERSEGI
// =============================

function perimeterSquare(){

    let s=rand(5,20);

    let ans=4*s;

    let data=createOption(ans);

    return{

        question:`Keliling persegi dengan sisi ${s} cm adalah ...`,

        options:data.options.map(x=>x+" cm"),

        answer:data.answer

    };

}

// =============================
// VOLUME KUBUS
// =============================

function cubeVolume(){

    let s=rand(2,12);

    let ans=s*s*s;

    let data=createOption(ans);

    return{

        question:`Volume kubus dengan sisi ${s} cm adalah ...`,

        options:data.options.map(x=>x+" cm³"),

        answer:data.answer

    };

}

// =============================
// Generator
// =============================

const generators=[

addition,
subtraction,
multiplication,
division,
power,
root,
multiple,
fpb,
areaRectangle,
perimeterSquare,
cubeVolume

];

// =============================
// Membuat 40 soal random
// =============================

function generateQuestions(){

    questions.length=0;

    for(let i=0;i<TOTAL_QUESTION;i++){

        let randomGenerator=

        generators[rand(0,generators.length-1)];

        questions.push(

            randomGenerator()

        );

    }

}

generateQuestions();