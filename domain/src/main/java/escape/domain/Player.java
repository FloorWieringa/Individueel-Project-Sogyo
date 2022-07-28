package escape.domain;

public class Player {
    public String name;

    public Player(String name){
        this.name = name;
    }

    Items wire = new Items("Wire", false, false);
    Items slimBook = new Items("Slim book", false, false);
    Items robotHand = new Items("Robot hand", false, false);
    Items fogSpray = new Items("Fog spray", false, false);
    Items rope = new Items("Rope", false, false);
    Items bookModulanium = new Items("Book on modulanium", false, false);
    Items hairStrands = new Items("Hair strands", false, false);
    Items modulanium = new Items("Modulanium", false, false);
    Items chair = new Items("Chair", false, false);
    Items workingMask = new Items("Working mask", false, false);
    Items elevatorDoors = new Items("Elevator doors", false, false);
    Items trapDoor = new Items("Trap door", false, false);
    Items vaultOpen = new Items("Secret vault", false, false);

    public Items retrieveItems(String name){
        switch(name){
            case "Wire":
                return wire;
            case "Slim book":
                return slimBook;
            case "Robot hand":
                return robotHand;
            case "Fog spray":
                return fogSpray;
            case "Rope":
                return rope;
            case "Book on modulanium":
                return bookModulanium;
            case "Hair strands":
                return hairStrands;
            case "Modulanium":
                return modulanium;
            case "Chair":
                return chair;
            case "Working mask":
                return workingMask;
            case "Elevator doors":
                return elevatorDoors;
            case "Trap door":
                return trapDoor;
            case "Secret vault":
                return vaultOpen;
            default:
                return null;
        }
    }

    public void addToInventory(String item){
        retrieveItems(item).found = true;
        retrieveItems(item).holding = true;
    }

    public void removeFromInventory(String item){
        retrieveItems(item).found = false;
    }

    public Items[] getInventory(){
        Items[] inventoryItems = {wire, slimBook, robotHand, fogSpray, rope, bookModulanium, hairStrands, modulanium, chair, workingMask, elevatorDoors, trapDoor, vaultOpen};
        return inventoryItems;
    }

    public void heldToTrue(String item){
        retrieveItems(item).holding = true;
    }

    public String commentary;
    public boolean elevatorOpen = false;
    public boolean trapdoorOpen = false;
    public boolean lasersOff = false;
    public boolean lookingForModulanium = false;
    public boolean havingModulanium = false;
    public boolean operativeMask = false;
    public boolean secretVaultOpen = false;
    public boolean wireInserted = false;
    public boolean lasersVisible = false;
    public boolean robotHandUsed = false;
    public boolean havingUsedModulanium = false;
    public boolean havingSeenChair = false;
    

    public String retrieveComments(int id){

        switch(id){
            case 1: //costume stand, untouched
                return "";
            case 2: // chem table
                return "The benches in the chemistry lab look like something out of a crime show where they know very little about chemistry. Empty conical flasks and test tubes line the back wall, and there are three large beakers full of brightly coloured liquids, one red, one blue and one yellow.";
            case 3: // desk
                return "This desk could have cost seven figures itself. It's all stainless steel and chrome, completely futuristic. Lying on its surface is a map of the world, and just to its right are two large, gleaming buttons. Unlabelled.";
             case 4: // computer, untouched
                return "Viperyon must have designed the computer themselves. It's impressively modern and fancy -– flat screen, touch screen, holographic screen, the works. There is a mouse, too, but it doesn’t seem to be working. And unfortunately, when you try to tap anything on the screen with your finger, you're prompted to give a password.";
            case 5: // world map
                return "It's a large map of the world, and Viperyon has left lots of scribbles and notes all over it. You can see several cities circled: Edmonton, Canada; Rosario, Argentina; Lyons, France; Bern, Switzerland; Netanya, Israel; and Volgograd, Russia. Scrawled on the bottom left corner of the map, in a blank patch of ocean, is a cryptic message: “All city dwellers forsake honour. Justice keeps losing more often. Perfect.”";
            case 6: // glass case
                return "The weapon case is locked. Well, at least Viperyon is a responsible weapons owner. The lock is a 5-letter combination code.";
            case 7: // robot hand
            if (wireInserted == false){
                return "Robot hand pedestal: The robot hand is a great prosthetic, but it's not as technologically up-to-date as the cool ones you've seen on hospital shows. At the wrist of it are two small buttons, one labelled 'grip/release' and one labelled 'neutral'. Pressing the buttons does nothing, however: looking at the back, you notice there's a gap where a piece of wire should be.";
            } else {
                return "The robot hand is working properly now. Pressing the 'grip/release' button makes the fingers ball up into a fist, then several seconds later, they let go. It repeats this action until you press the 'neutral' button.";
            }
            case 8: // invisible barrier
            if (lasersOff == false && lasersVisible == false){
                return "As you approach the centre of the room, you become aware of a faint humming in the air. You reach out with one hand for the rope and chair -– and instantly draw back in pain. Something burned you! Something invisible. There's some kind of barrier stopping you getting too close.";
            } 
            if (lasersOff == false && lasersVisible == true){
                return "A series of lasers surrounds the chair in a cage formation, shimmering, burning vertical bars from ceiling to floor, roughly a hand's width separating each one.";
            }
            else {
                return "The air is silent.";
            }
            case 9: // chair
                if (lasersOff == false && lasersVisible == false){
                return "As you approach the centre of the room, you become aware of a faint humming in the air. You reach out with one hand for the rope and chair –- and instantly draw back in pain. Something burned you! Something invisible. There's some kind of barrier stopping you getting too close.";   
            }
            if (lasersOff == false && lasersVisible == true){
                return "The chair is surrounded by lasers, out of reach.";
            }
            else {
                havingSeenChair = true;
                chair.holding = true;
                return "There's a message scratched into the underside of the wood of the chair: He's gone for now, but he'll be back to finish me off at any moment. It's all over for me, but I'm writing this with my earring just in case Force of Nature is trapped here after I'm gone. Force of Nature, I'm warning you: this Viperyon is serious business. He's killed all the others -– I can see Pure Platinum's hand over there, like a sick trophy. If you somehow get out of this laser cage, to make the elevator work you need to go inside and say the name of his last victim. I guess... that'll be me. But it has to be said in his voice. That's the only thing that triggers it. Good luck. The world needs you.";
            }
            case 10: // coiled rope
            if (lasersOff == false && lasersVisible == false){
                return  "As you approach the centre of the room, you become aware of a faint humming in the air. You reach out with one hand for the rope and chair –- and instantly draw back in pain. Something burned you! Something invisible. There's some kind of barrier stopping you getting too close.";
            }
            if (lasersOff == false && lasersVisible == true){
                return "";
            }
            else {
                return "";
            }
            case 11: // lift door
            if (elevatorOpen == false){
                return "The elevator doors snapped shut behind you when you got out, and you can't open them at all.";
            }
            if (elevatorOpen == true && (havingSeenChair == false || operativeMask == false)) {
                return "The doors to the elevator are open.";
            }
            if (havingSeenChair == true && operativeMask == true){
                return "You can try to escape!";
            }
            case 12: // trap door
            if (trapdoorOpen == false && robotHandUsed == false){
                return " ";
            }
            if (trapdoorOpen == true && robotHandUsed == false) {
                return "You walk over to the trap door. Looking at it closer, you see that it's too deep to jump in without risking serious injury, but not so deep that you can't see the bottom. There's something down there, some small piece of paper scrunched up in a ball.";
            }
            if (robotHandUsed == true){
                return "The note you found on the bottom of the hole reads:";
            }
            case 13: // stalker pictures
                return "There are five photos, stabbed to the wall a bit savagely. They're candid shots –- very candid. The subjects clearly had no idea they were being watched. Each photo has a very different-looking subject. Photo 1 is a woman with glasses and long, blonde hair. Photo 2 is a man with an earring, and also with long, blonde hair. Photo 3 is a woman with glasses and short, brown hair. Photo 4 is a man with short, brown hair. And photo 5 is a woman with earrings and long, brown hair. Maybe these are Viperyon's victims? You really have no idea.";
            case 14: // bed, untouched
                return "";
            case 15: // bookcase 
                return "";
            case 16: // Bed - checking the underside
                return "You crouch next to the bed. Written in marker on the underside is some sort of code! There's a question mark, a capital F, capital H, capital N, and another question mark. Underneath this are the words, number of bedposts a giveaway?";
            case 17: // Bookcase - place missing book(s)
                return "You place the slim book onto the shelf. It fits into the gap perfectly. You feel a momentary shudder under your fingertips, and the entire bookcase begins to swing open. A full-on, Scooby-Doo-like secret door! You find yourselves staring into a vault, full of cabinets and cupboards, all of them labelled with the names of various world currencies. Dollars, Yen, Rupiah, everything. One area catches your eye: on a cupboard labelled 'Francs', there's an entire shelf empty. Viperyon must have cleared it out recently.";
            case 19: // Chair/rope - spraying fog spray
            lasersVisible = true;
                return "Fog fills the air in front of you. As it spreads towards the chair in the middle of the room, you notice something strange: flickering red lights are starting to become visible. The fog is revealing a series of lasers surrounding the chair in a cage formation, shimmering, burning vertical bars from ceiling to floor, roughly a hand's width separating each one.";
            case 20: // Chair/rope - reaching for rope after spraying fog spray
            //rope.found = true;
                return "You have to move slowly and carefully, but your arm fits through the bars of the laser cage and you manoeuvre the rope out without so much as a singe.";
            case 22: // Chem table - correctly mixing modulanium
            havingModulanium = true;
                return "Following some strange rules of chemistry that you don't 100% understand, the mixture shines bright gold. It matches the picture on the cover of the Modulanium book exactly.";
            case 23: // Computer - examining the mouse
                return "Well, that’s why it’s not working: there’s a post-it stuck to the bottom. Written on it are four words: Password: map’s missing firsts.";
            case 25: // Computer - inputting second password 'SCRAMBLED BELOW'
            lasersOff = true;
                return "Viperyon must have designed the computer themselves. It's impressively modern and fancy -– flat screen, touch screen, holographic screen, the works. There is a mouse, too, but it doesn’t seem to be working. And unfortunately, when you try to tap anything on the screen with your finger, you're prompted to give a password.";
            case 26: // Costume stand - inserting hair sample
                return "";
            case 27: // Costume stand - trying on mask w/o Modulanium
            lookingForModulanium = true;
                if (havingModulanium == false){
                return "You notice that you would probably fit in the costume quite well -- why not try it on? As you try on the mask with voice modulator, you're disappointed to find you still sound like yourself. After a moment you hear a small, tinny voice in your ear. “Modulanium empty. Modulanium replenishment required.”";
                }
                if (havingUsedModulanium == true) {
                    return "You try on the mask, and it comes alive with power. The sound of your breath comes out deep and intimidating. You speak, and the modulated voice of Viperyon echoes through the room.";
                }
            case 28: // Costume stand - trying on mask with Modulanium
            operativeMask = true;
            workingMask.holding = true;
            havingUsedModulanium = true;
                return "You try on the mask, and it comes alive with power. The sound of your breath comes out deep and intimidating. You speak, and the modulated voice of Viperyon echoes through the room.";
            case 29: // Desk - pressing button 1
            elevatorOpen = true;
            elevatorDoors.holding = true;
                return "You press the first button, and behind you, the elevator door opens up again.";
            case 30: // Desk - pressing button 2
            trapdoorOpen = true;
                return "You press the second button and hear the sound of a door sliding open. At first you don't see where, but after a moment, there it is -– a trap door has opened up in the floor just in front of the elevator.";
            case 31: // Elevator - entering after opening door
                return "It's still beeping, but the inside looks like an ordinary elevator. It has all the usual buttons, the weight capacity sign, the box with an emergency phone, nothing extraordinary.";
            case 32: // Elevator - opening emergency phone box
            //wire.found = true;
                return "The cord for the phone has been cut. Typical. But sitting in the box is a small piece of wire. It doesn't belong here, but it does look like it would be functional if put in the right place.";
            case 33: // Elevator - saying the right name with modulator
                return "NOTE: refer to appropriate conclusion";
            case 34: // Robot hand pedestal - inserting wire into hand
            wireInserted = true;
                return "There's a small crackle of electricity, and the fingers on the glove twitch to life. Pressing the 'grip/release' button makes the fingers ball up into a fist, then several seconds later, they let go. It repeats this action until you press the 'neutral' button.";
            case 35: // Robot hand: tying the rope to it
                return "You tie the rope to the robot hand. It can reach a lot deeper than you can by yourself.";
            case 36: // Robot hand - setting it to grip/release, tying rope to it and lowering it into the trap hole
            robotHandUsed = true;
                return "You set the robot hand to grip/release, tie the rope to it and lower it into the trap hole. The rope is long enough that the hand comfortably reaches the bottom of the hole. The fingers grab the piece of paper down there, and you hurriedly pull the rope up before they release. Looking at the paper, you see it's an official message, typed, delivered from some tech company:";
            case 37: // Weapon case - inserting code AFHNZ
            //fogSpray.found = true;
                return "The lock pops off, and you swing the door open. Inside there are lots of spaces for weapons, but it's almost completely empty at the moment. Viperyon must have taken them out for a while. The only thing he's left behind is an aerosol can labelled 'Instant Fog'.";
            case 38: // Bed - taking the hair strands
            //hairStrands.found = true;
                return "You take the hair strands and pocket them; who knows what might be useful in this place?";
            case 39:
                return "You notice an interesting looking book on the bottom shelf: Modulanium: the Secret to Modulating Your Own Success. The first chapter is all about extracting pure liquid Modulanium from its natural compound. Scanning the pages, you understand what you'll need: in simple terms, not using any of the fancy names, you'll need to mix one cup of red liquid, two cups of orange, and one cup of green.";
            case 41:
                return "You take another look at the book 'Modulanium: the Secret to Modulating Your Own Success'. The first chapter is all about extracting pure liquid Modulanium from its natural compound. Scanning the pages, you understand what you'll need: in simple terms, not using any of the fancy names, you'll need to mix one cup of red liquid, two cups of orange, and one cup of green.";
            default:
                return " ";
        }
    }
} 
