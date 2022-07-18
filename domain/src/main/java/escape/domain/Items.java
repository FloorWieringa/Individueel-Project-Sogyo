package escape.domain;

public class Items {
    public String itemName;
    public boolean holding;
    public boolean found;
    public String commentary;

    public Items (String name, boolean heldStatus, boolean inPossession){
        this.itemName = name;
        this.holding = heldStatus;
        this.found = inPossession;
    }

    public static String retrieveComments(int id){
        switch(id){
            case 1: //costume rack, untouched
                return "Costume stand: Now that you're getting a closer look, you see that this is Viperyon's backup costume. It's still sturdy and intimidating, but the colours are a lot more modest and the stitching more haphazard. The chest guard part looks like it opens up, and you notice a small panel around where the right ribs would be. There's a little screen there: it says, “Insert biological sample to activate.”";
            case 2: // chem table
                return "Chemistry lab: The benches here look like something out of a crime show where they know very little about chemistry. Empty conical flasks and test tubes line the back wall, and there are three large beakers full of brightly coloured liquids, one red, one blue and one yellow.";
            case 3: // desk
                return "Desk: This desk could have cost seven figures itself. It's all stainless steel and chrome, completely futuristic. Lying on its surface is a map of the world, and just to its right are two large, gleaming buttons. Unlabelled.";
             case 4: // computer, untouched
                return "Computer: Viperyon must have designed it themselves. It's impressively modern and fancy -– flat screen, touch screen, holographic screen, the works. There is a mouse, too, but it doesn’t seem to be working. And unfortunately, when you try to tap anything on the screen with your finger, you're prompted to give a password.";
            case 5: // world map
                return "Map: It's a large map of the world, and Viperyon has left lots of scribbles and notes all over it. You can see several cities circled: Edmonton, Canada; Rosario, Argentina; Lyons, France; Bern, Switzerland; Netanya, Israel; and Volgograd, Russia. Scrawled on the bottom left corner of the map, in a blank patch of ocean, is a cryptic message: “All city dwellers forsake honour. Justice keeps losing more often. Perfect.”";
            case 6: // glass case
                return "Weapon case: It's locked. Well, at least Viperyon is a responsible weapons owner. The lock is a 5-letter combination code.";
            case 7: // robot hand
                return "Robot hand pedestal: The robot hand is a great prosthetic, but it's not as technologically up-to-date as the cool ones you've seen on hospital shows. At the wrist of it are two small buttons, one labelled 'grip/release' and one labelled 'neutral'. Pressing the buttons does nothing, however: looking at the back, you notice there's a gap where a piece of wire should be.";
            case 8: // invisible barrier
                return "Chair + rope: As you approach the centre of the room, you become aware of a faint humming in the air. You reach out with one hand for the rope/chair -– and instantly draw back in pain. Something burned you! Something invisible. There's some kind of barrier stopping you getting too close.";
            case 9: // chair
                return "Chair + rope: As you approach the centre of the room, you become aware of a faint humming in the air. You reach out with one hand for the rope/chair – and instantly draw back in pain. Something burned you! Something invisible. There's some kind of barrier stopping you getting too close.";
            case 10: // coiled rope
                return  "Chair + rope: As you approach the centre of the room, you become aware of a faint humming in the air. You reach out with one hand for the rope/chair – and instantly draw back in pain. Something burned you! Something invisible. There's some kind of barrier stopping you getting too close.";
            case 11: // lift door
                return "Elevator: The doors snapped shut behind you when you got out, and you can't open them at all.";
            case 12: // trap door
                return " ";
            case 13: // stalker pictures
                return "Photographs: There are five photos, stabbed to the wall a bit savagely. They're candid shots –- very candid. The subjects clearly had no idea they were being watched. Each photo has a very different-looking subject. Photo 1 is a woman with glasses and long, blonde hair. Photo 2 is a man with an earring, and also with long, blonde hair. Photo 3 is a woman with glasses and short, brown hair. Photo 4 is a man with short, brown hair. And photo 5 is a woman with earrings and long, brown hair. Maybe these are Viperyon's victims? You really have no idea.";
            case 14: // bed, untouched
                return "Bed: This is clearly not someone's first choice of sleeping arrangements. It's small and not well kept, and the sheets are paper thin. A couple of stray hairs litter the pillow, and one of the posts on this four-poster bed has been broken off, making it a three-poster. If you had to guess, you'd say it was Viperyon's old childhood bed, repurposed.";
            case 15: // bookcase
                return "Bookcase: It's packed, but very neatly so. Each shelf is full but not overflowing –- except one. The very top shelf has a single space between thick chemistry tomes where a very thin book could fit. It must be Viperyon's favourite.";          
            default:
                return " ";
        } 
    }

    public String retrieveActionComments(int actionID){
        switch(actionID){
            case 16: // Bed - checking the underside
            return "You crouch next to the bed. Written in marker on the underside is some sort of code! There's a question mark, a capital F, capital H, capital N, and another question mark. Underneath this are the words, number of bedposts a giveaway?";
            case 17: // Bookcase - place missing book(s)
            return "You feel a momentary shudder under your fingertips, and the entire bookcase begins to swing open. A full-on, Scooby-Doo-like secret door! You find yourselves staring into a vault, full of cabinets and cupboards, all of them labelled with the names of various world currencies. Dollars, Yen, Rupiah, everything. One area catches your eye: on a cupboard labelled 'Francs', there's an entire shelf empty. Viperyon must have cleared it out recently.";
            case 18: // Bookcase - take Modulanium book (only once it's specifically known what to search for! otherwise different text?)
            //bookModulanium.found = true;
            return "You find the book you're looking for on the bottom shelf: Modulanium: the Secret to Modulating Your Own Success. The first chapter is all about extracting pure liquid Modulanium from its natural compound. Scanning the pages, you understand what you'll need: in simple terms, not using any of the fancy names, you'll need to mix one cup of red liquid, two cups of orange, and one cup of green.";
            case 19: // Chair/rope - spraying fog spray
            return "Fog fills the air in front of you. As it spreads towards the chair in the middle of the room, you notice something strange: flickering red lights are starting to become visible. The fog is revealing a series of lasers surrounding the chair in a cage formation, shimmering, burning vertical bars from ceiling to floor, roughly a hand's width separating each one.";
            case 20: // Chair/rope - reaching for rope after spraying fog spray
            //rope.found = true;
            return "You have to move slowly and carefully, but your arm fits through the bars of the laser cage and you manoeuvre the rope out without so much as a singe.";
            case 21: // Chair/rope - examining chair when lasers are off
            //rope.found = true;
            return "There's a message scratched into the wood: He's gone for now, but he'll be back to finish me off at any moment. It's all over for me, but I'm writing this with my earring just in case Force of Nature is trapped here after I'm gone. Force of Nature, I'm warning you: this Viperyon is serious business. He's killed all the others -– I can see Pure Platinum's hand over there, like a sick trophy. If you somehow get out of this laser cage, to make the elevator work you need to go inside and say the name of his last victim. I guess... that'll be me. But it has to be said in his voice. That's the only thing that triggers it. Good luck. The world needs you.";
            case 22: // Chem table - correctly mixing modulanium
            //modulanium.found = true;
            return "Following some strange rules of chemistry that you don't 100% understand, the mixture shines bright gold. It matches the picture on the cover of the Modulanium book exactly.";
            case 23: // Computer - examining the mouse
            return "Well, that’s why it’s not working: there’s a post-it stuck to the bottom. Written on it are four words: Password: map’s missing firsts.";
            case 24: // Computer - inputting first password 'BEGIN'
            return "The computer loads up. There's virtually nothing on the desktop; one icon that says 'ShivTech' and one that says 'Heroes'. Clicking on ShivTech prompts you to enter another password. Clicking on Heroes opens a textmdocument: [NOTE]";
            case 25: // Computer - inputting second password 'SCRAMBLED BELOW'
            return "You type in the password, hit 'confirm', and just like that, the buzzing in the air is silenced. The lasers are off.";
            case 26: // Costume stand - inserting hair sample
            //slimBook.found = true;
            return "You hear a satisfying click, and the chest of the suit swings open. There's a secret compartment inside, and it contains a slim book. You glance at the cover: Close to your Heart: Bulletproof Books for Protective Purposes.";
            case 27: // Costume stand - trying on mask w/o Modulanium
            return "It doesn't really seem to do anything. Your voice is unchanged. After a moment you hear a small, tinny voice in your ear. “Modulanium empty. Modulanium replenishment required.”";
            case 28: // Costume stand - trying on mask with Modulanium
            return "The mask is alive with power. The sound of your breath comes out deep and intimidating. You speak, and the modulated voice of Viperyon echoes through the room.";
            case 29: // Desk - pressing button 1
            return "You press it, and behind you, the elevator door opens up again.";
            case 30: // Desk - pressing button 2
            return "You press it and hear the sound of a door sliding open. At first you don't see where, but after a moment, there it is -– a trap door has opened up in the floor just in front of the elevator. Looking at it closer, you see that it's too deep to jump in without risking serious injury, but not so deep that you can't see the bottom. There's something down there, some small piece of paper scrunched up in a ball.";
            case 31: // Elevator - entering after opening door
            return " It's still beeping, but the inside looks like an ordinary elevator. It has all the usual buttons, the weight capacity sign, the box with an emergency phone, nothing extraordinary.";
            case 32: // Elevator - opening emergency phone box
            //wire.found = true;
            return "The cord for the phone has been cut. Typical. But sitting in the box is a small piece of wire. It doesn't belong here, but it does look like it would be functional if put in the right place.";
            case 33: // Elevator - saying the right name with modulator
            return "NOTE: refer to appropriate conclusion";
            case 34: // Robot hand pedestal - inserting wire into hand
            //robotHand.found = true;
            return "There's a small crackle of electricity, and the fingers on the glove twitch to life";
            case 35: // Robot hand - pressing the buttons
            return " Pressing the 'grip/release' button makes the fingers ball up into a fist, then several seconds later, they let go. It repeats this action until you press the 'neutral' button.";
            case 36: // Robot hand - setting it to grip/release, tying rope to it and lowiring it into the trap hole
            return "The rope is long enough that the hand comfortably reaches the bottom of the hole. The fingers grab the piece of paper down there, and you hurriedly pull the rope up before they release. Looking at the paper, you see it's an official message, typed, delivered from some tech company: [NOTE]";
            case 37: // Weapon case - inserting code AFHNZ
            //fogSpray.found = true;
            return "The lock pops off, and you swing the door open. Inside there are lots of spaces for weapons, but it's almost completely empty at the moment. Viperyon must have taken them out for a while. The only thing he's left behind is an aerosol can labelled 'Instant Fog'.";
            case 38: // Bed - taking the hair strands
            //hairStrands.found = true;
            return "You take the hair strands and pocket them; who knows what might be useful in this place?";
            default:
            return " ";
        }
    }
}
