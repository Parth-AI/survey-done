var canvas;
var database;
var input1,button1;
var input2,button2;
var input3,button3;
var input4,button4;
var gretting,gretting1,gretting2,gretting3;
var email;
var ans1,ans2,ans3;
var heading;
var ref;
var data;


function setup(){
    database = firebase.database();
    ref = database.ref('survey');
    console.log(database);

    /*data = {
        name:"DTS",
        scores:43
    }*/

    
    
    canvas = createCanvas(500,500);

    input1 = createInput("E-mail ID");
    button1 = createButton("next");

    input2 = createInput("Enter Your answer");
    button2 = createButton("Done");

    input3 = createInput("Enter Your answer");
    button3 = createButton("Done");

    input4 = createInput("Enter Your answer");
    button4 = createButton("Done");

    greeting = createElement('h3');
    greeting1 = createElement('h3');
    greeting2 = createElement('h3');
    greeting3 = createElement('h3');

    heading = createElement('h2');
   
}

function draw(){
    background(255);

    fill(0);
    textSize(18);
    text("Enter your E-mail ID below.",50,80);
    text("Do you donate your blood?",50,180);
    text("Do you know coding?",50,280);
    text("Do you donate money in NGO's?",50,380);

    input1.position(400,200);
    button1.position(600,200);

    input2.position(400,300);
    button2.position(600,300);

    input3.position(400,400);
    button3.position(600,400);

    input4.position(400,500);
    button4.position(600,500);

    button1.mousePressed(function(){
        email = input1.value();
        greeting.html("Your E-mail ID is '" + email+"'" )
        greeting.position(400, 190)
        input1.hide();
        button1.hide();

        data = {
            email:input1.value(),
        }

        ref.push(data);
    });

    button2.mousePressed(function(){
        ans1 = input2.value();
        greeting1.html("Your answer is '" + ans1+"'" )
        greeting1.position(400, 290)
        input2.hide();
        button2.hide();

        data = {
            ans1:input2.value(),
        }

        ref.push(data);
    });

    button3.mousePressed(function(){
        ans2 = input3.value();
        greeting2.html("Your answer is '" + ans2+"'" )
        greeting2.position(400, 390)
        input3.hide();
        button3.hide();

        data = {
            ans2:input3.value(),
        }

        ref.push(data);
    });

    button4.mousePressed(function(){
        ans3 = input4.value();
        greeting3.html("Your answer is '" + ans3+"'" )
        greeting3.position(400, 490)
        input4.hide();
        button4.hide();

        data = {
            ans3:input4.value(),
        }

        ref.push(data);
    });

    heading.html("A Survey");
    heading.position(500,0);
    
}

