let question1 = document.querySelector(".question1");
let question2 = document.querySelector(".question2");
let question3 = document.querySelector(".question3");
let question4 = document.querySelector(".question4");
let q1set = document.querySelector(".q1set");
let q2set = document.querySelector(".q2set");
let q3set = document.querySelector(".q3set");
let q4set = document.querySelector(".q4set");



question1.addEventListener( "click" , ( ) =>{
 q1set.classList.remove("d-none");
 q2set.classList.add("d-none");
 q3set.classList.add("d-none");
 q4set.classList.add("d-none");
 q1set.innerHTML=`<p> We are a software house that can easily provide you with your required services and on time delivery </p>`;

} );

question2.addEventListener( "click" , ( ) =>{
    q1set.classList.add("d-none");
    q2set.classList.remove("d-none");
    q3set.classList.add("d-none");
    q4set.classList.add("d-none");
    q2set.innerHTML=`<p> We provide a lot of services which include website development , App Development , IOS Development , Desktop App </p>`;
    } );

question3.addEventListener( "click" , ( ) =>{
    q1set.classList.add("d-none");
    q2set.classList.add("d-none");
    q3set.classList.remove("d-none");
    q4set.classList.add("d-none");
    q3set.innerHTML=`<p> Contact Us at our phone number or email address or visit our software houses any time you want <br /> +01 123 456 789   </p>`;
 } )

 question4.addEventListener( "click" , ( ) =>{
    q1set.classList.add("d-none");
    q2set.classList.add("d-none");
    q3set.classList.add("d-none");
    q4set.classList.remove("d-none");
    q4set.innerHTML=`<p>Well We really apprececiate you coming here to great us and we say hy to you tooo  </p>`;
            
 } )