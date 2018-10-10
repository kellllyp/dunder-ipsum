// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
    "Identity theft is not a joke, Jim! Millions of families suffer every year!",
    "Jim, James, Jimothy... that sounds weird, are you okay with being called Jim?",
    "That's what she said.",
    "I. Declare. BANKRUPTCY! I just want you to know you can't just say the word bankruptcy and expect anything to happen. I didn't say it, I declared it.",
    "Dwight, you ignorant slut!",
    "I'm not superstitious, but I am a little stitious.",
    "If I had a gun with two bullets, and I was in a room with Hitler, Bin Laden and Toby... I'd shoot Toby twice.",
    "The worst thing about prison was... was the dementors!",
    "Bears. Beets. Battlestar Galactica.",
    "How the turntables...",
    "It's not Ashton Kutcher, it's Kevin Malone.",
    "In any cheating movie, the person getting cheated on is the hero. You're Ali Larter, I'm Beyonce. I am Beyonce always.",
    "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me.",
    "Did I stutter?!",
    "I have flaws; what are they? I sing in the shower, sometimes I spend too much time volunteering, occasionally I'll hit somebody with my car.",
    "One day Michael came in complaining about a speed bump on the highway. I wonder who he ran over then.",
    "Don't ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been, ever, for any reason whatsoever.",
    "Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the way.",
    "Oh my God, my mind is going a mile an hour.",
    "I talk a lot so I just learned to tune myself out.",
    "I understand nothing.",
    "I got six numbers, one more and it would have been a complete phone number!",
    "Hello Rock 107, am I the 107th caller?",
    "Early worm gets the worm.",
    "Who is Justice Beaver?",
    "Well auction off people like in the olden days.",
    "There's such thing as good grief, just ask Charlie Brown.",
    "And I knew exactly what to do... but in a much more real sense, I had no idea what to do.",
    "You cheated on me, when I specifically asked you not to?!",
    "Where are the turtles?!",
    "Save Bandit!",
    "Once a year, Dwight holds a seminar updating us on the newest developments in the world of karate, because as we all know, the one thing that thousand-year-old martial arts do all the time is change.",
    "R is one of the most menacing of sounds... that's why they call it murder and not muckduck.",
    "In an ideal world I would have all ten fingers on my left hand so my right hand could just be a fist for punching.",
    "I love catching people in the act, that's why I always whip open doors.",
    "Based on stereotypes that are totally untrue, that I do not agree with, you would maybe not be a very good driver. Aw man, am I a woman?",
    "I tried to talk to Toby and be his friend, but it's like trying to be friends with an evil snail.",
    "I can't even hear you, it's just noise coming out of an ugly scientist.",
    "I don't think Michael has ever done drugs...I don't know if anyone has ever offered him any.",
    "Do you think that smoking drugs is cool? Do you think doing alcohol is cool?",
    "There's too many people in this world; we need a new plague.",
    "As a person who buys a lot of erotic cakes, it feels good to be represented on one.",
    "Like my mom always says: talk classy, act nasty.",
    "I wish I could menstruate, I'd be more in tune with the moon and the tides.",
    "Voodoo Mama Juju, explain your dalliance with the dark arts. It's not my fault, I was exposed to Harry Potter.",
    "I suggested we flip a coin, but Angela said she doesnt like to gamble... of course, by saying that, she was gambling that I wouldn't smack her.",
    "Ok, show of hands: who wants to live in a world where Stanley has two lovers and you don't have any?",
    "It's collard greens. That doesn't really make sense, you don't call them collard people.",
    "I need a username, and I have a great one: Little Kid Lover. That way people will know exactly where my priorities are.",
    "Let's see your penis!",
    "That is Northern Lights Cannabis Indica. No, it's marijuana.",
    "You know what they say: fool me once, strike one. But fool me twice, strike three.",
    "Is that the same grill you grilled your foot on?",
    "We didn't have ice cream so this is mayonnaise and black olives.",
    "We have radon coming from below, we have asbestos in the ceilings. These are silent killers. You are the silent killer, go back to the annex.",
    "Powerpoint, Powerpoint.",
    "Stanley, you crush your wife during sex and your heart sucks. Oscar, you're gay. Andy, Cornell called and they think you suck... and you're gayer than Oscar!",
    "Just tell him to call me ASAP as possible.",
    "Damn it Meredith, where are your panties?! It's casual day!",
    "Make friends first, make sales second, make love third… in no particular order.",
    "Retaliation... tit for tit.",
    "Webster's Dictionary defines wedding as the fusing of two metals with a hot torch.",
    "The Busiest Beaver Award goes to Phyllis Lapin! This says Bushiest Beaver.",
    "That is all I care about. Getting. More. Megadesk.",
    "He is not an idiot, he is mentally challenged!",
    "Phallus? Phyllis, sorry, I've got penises on the brain.",
    "I thought you said green was whorish. No, orange is whorish.",
    "Maybe I could be a food critic... these muffins taste bad.",
    "I would just like to say something off of what Darryl said about the level playing field: that is actually a zoning issue.",
    "If you're saying Hilary Swank isnt hot, then you're saying Im not hot because, obviously, I'm not as hot as Hilary Swank!",
    "They call it Scranton, what, the Electric City!",
    "Abraham Lincoln once said: if you are racist, then I will attack you with the North.",
    "I've been involved in a number of cults both as a leader and a follower; you have more fun as a follower, but you make more money as a leader.",
    "Just poopin, you know how I be. Crazy world, lots of smells.",
    "BOBODDY, BOBODDY.",
    "My favorite part of an ice cream party: the bagel chips!",
    "It has sort of an oaky afterbirth.",
    "You a big William Hung fan?",
    "I dont care what they say about me, I just want to eat.",
    "Jim Halpert said there was an abandoned infant in the woman's room... when I went to save the child, I saw Meredith on the can.",
    "I feel God in this Chili's tonight.",
    "Shirty, mole, lazy eye, Mexico, baldy, sugar boobs, black woman.",
    "A uterus is different from a vagina... I still have a vagina.",
    "Jim Halpert is smudge and arrogant.",
    "He had no arms or legs, he couldnt hear, see, or speak. This is how he led a nation.",
    "Why waste time say lot word when few word do trick?",
    "Ever banged an entire bachelorette party, baby?",
    "Bob Vance, Vance Refrigeration.",
    "No, God! No, God Please No! No! No! Noooooo!",
    "You are the worst assistant ever, and you're disgusting, Dwigt.",
    "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it's not like a compulsive need to be liked. Like my need to be praised.",
    "What's a two-way petting zoo? You pet the animals and they pet you back.",
    "I am not a security threat. And my middle name is Kurt, not fart.",
    "Bippity boppity, give me the zoppity."

   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}


// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 500;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
  }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;
