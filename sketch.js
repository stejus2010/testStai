var gameState;

function preload() {
    gameState=0;

}

function setup() {
    createCanvas(windowWidth,windowHeight);
   

}

function draw() {
    
    background("aqua");

    if (mouseY>=windowHeight-35 || mouseY<=windowHeight-745) {
        showError();    



        console.log("hi");
    }

    test=createButton("𝙏𝙚𝙨𝙩 𝙌𝙪𝙚𝙨𝙩𝙞𝙤𝙣");
    test.position(50,10);
    test.size(600, 100);
    test.style('border-radius','20px')
    test.style('background','transparent');
    test.style('color','black');
    test.style('padding','10px')
    test.style('font-size','25px');
    test.style('border-color','transparent');

    question=createButton("𝙒𝙝𝙖𝙩 𝙞𝙨 𝙩𝙝𝙚 𝙇𝙖𝙧𝙜𝙚𝙨𝙩 𝘾𝙤𝙣𝙩𝙞𝙣𝙚𝙣𝙩 𝙞𝙣  𝙩𝙝𝙚 𝙬𝙤𝙧𝙡𝙙?");
    question.position(-10, 180);
    question.size(600, 150);
    question.style('border-radius','20px')
    question.style('background','transparent');
    question.style('color','black');
    question.style('padding','10px')
    question.style('font-size','25px');
    question.style('border-color','transparent');

}

function showError(){



    errorButton=createButton("𝙔𝙤𝙪 𝙃𝙖𝙫𝙚 𝘼𝙩𝙩𝙚𝙢𝙥𝙩𝙚𝙙 𝙩𝙤 𝙀𝙭𝙞𝙩 𝙩𝙝𝙚 𝙏𝙖𝙗 ⚠️!! ")
    errorButton.position(windowWidth/2-250, 15);
    errorButton.size(800, 500);
    errorButton.style('border-radius','20px')
    errorButton.style('background','ocean-white');
    errorButton.style('color','black');
    errorButton.style('padding','10px')
    errorButton.style('font-size','25px');
    errorButton.style('border-color','transparent');


    okButton=createButton("𝙊𝙠")
    okButton.position(windowWidth/2+200, 350);
    okButton.size(55, 30);
    okButton.style('border-radius','20px')
    okButton.style('background','skyblue');
    okButton.style('color','black');
    okButton.style('font-size','25px');
    okButton.style('border-color','black');
    okButton.mousePressed(home);



}


function home() {

    errorButton.hide();
    okButton.hide();

    final=createButton("𝙔𝙤𝙪 𝙃𝙖𝙫𝙚 𝘼𝙩𝙩𝙚𝙢𝙥𝙩𝙚𝙙 𝙩𝙤 𝙘𝙤𝙥𝙮 .\n 𝙔𝙤𝙪 𝙘𝙖𝙣 𝙣𝙤𝙩 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙚 𝙬𝙞𝙩𝙝 𝙩𝙝𝙞𝙨 𝙩𝙚𝙨𝙩");
    final.position(windowWidth/2+200, 250);
    final.size(400, 300);
    final.style('border-radius','20px')
    final.style('background','skyblue');
    final.style('color','black');
    final.style('font-size','25px');
    final.style('border-color','black');

}