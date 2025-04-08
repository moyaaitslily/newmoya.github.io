let input, button, responseText;
let fortuneType
let fortunes = {
    funny: ["You will step on dog poop💩", "RUN", "Error 404: Fortune not found", "You need a mint, like baaad", "Your next fart will be a shart", "No Glove No Love"],
    serious: ["You will receive a greatest news ever in 3 days", "Hard work will pay off soon", "Don't worry, you gonna pass", "Good thing takes time", "This is gonna be your year!"],
    love: ["A romantic surprise awaits you", "Love is in the air...or is it just pollen🙊", "humm...you better check your partner's phone", "True love won't hesitate or be hesitated", "GO FOR IT!!!"],
    spooky: ["You are not alone...", "You forgot turn off the stove", "be cautions at night, don't look back", "A thing is following you"]
};

function setup(){
    createCanvas(windowWidth, windowHeight);
    background("#000000");

    // Title Styling
    let title = createElement('h1', '🔮 Fortune Teller 🔮');
    title.style('text-align', 'center');
    title.style('font-size', '32px');
    title.style('margin-top', '20px');

    let subtitle = createElement('p', 'Ask a question and reveal your destiny');
    subtitle.style('text-align', 'center');
    subtitle.style('font-size','18px');

    // Input field
    input = createInput("");
    input.position(width / 2 - 150, height / 5);
    input.size(300);
    input.attribute("placeholder", "Type your question...");
    input.style('font-size', '16px');
    input.style('padding', '5px');

    //Fortune Type Selector
    fortuneType = createRadio();
    fortuneType.option("funny", "Funny");
    fortuneType.option("serious", "Serious");
    fortuneType.option("love", "Love");
    fortuneType.option("spooky", "Spooky");
    fortuneType.selected("funny");
    fortuneType.position(width / 2 - 150, height / 3.5);
    fortuneType.style('display', 'flex');
    fortuneType.style('gap', '15px');
    fortuneType.style('justify-content', 'center');
    fortuneType.style('font-size', '18px');

    //Button to get fortune
    button = createButton("Get Fortune");
    button.position(width / 2 - 60, height / 2.3);
    button.mousePressed(generateFortune);
    button.style('font-size', '18px');
    button.style('padding', '10px 20px');

    responseText = "";
}

function draw(){
    background('#6f4685');
    fill('#301934');
    textSize(26);
    textAlign(CENTER);
    text("🌙 Ask the Fortune Teller 🪄", width / 2, height / 5);

    //Display the fortune response
    textSize(24);
    fill('#000000');
    text(responseText, width / 2, height / 2);
}

// Function to generate a random fortune
function generateFortune(){
    let question = input.value();
    if (question.trim() === ""){
        responseText = "Ask me a question first!";
        return;
    }

    let selectedType = fortuneType.value();
    responseText = random(fortunes[selectedType]);
}
