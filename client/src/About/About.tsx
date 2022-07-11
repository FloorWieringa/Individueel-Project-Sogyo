import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export function About() {
    return <div>
        <h1>YOUR HISTORY</h1>
        <p className="flavourtext">
        Not long ago, crime was rife in your city. Scammers roamed the streets during the day,
        and gangs did the same at night. Regular citizens feared for their lives whenever they set
        foot outside their front doors.
        </p>
        <p className="flavourtext">Then came the heroes. They swooped in and did what any good hero should: they cleaned
        up this town. They took out the crooks; they made people feel safe again. Of course, with
        any instance of heroes, there comes a maniacal villain or two, but they only target the
        heroes themselves, not civilians.
        </p>
        <p className="flavourtext">Of the big five heroes who frequent your city, none is more celebrated than Force of Nature,
        a masked vigilante with power over the earthly elements. Amazing though he or she has
        been, Force of Nature is not without his or her detractors. In fact, your area's most
        prominent news outlet has recently offered a staggering seven-digit reward for the identity
        of the caped crime-stopper. At first you showed very little interest. You have better things
        to do with your time than chase violent eccentrics in dress-up.
        </p>
        <p className="flavourtext">But as time passes and nobody collects the reward, your sharp eyes and astute brains can't help seeing what
        everyone else has missed: where Force of Nature tends to show up, the direction they
        usually come from... little clues. And when even more weeks went by with nobody noticing
        these things, you can't resist. You're pretty sure you've worked out where Force of Nature's
        lair is. Perhaps not their permanent residence –-they seem to be an international hero-–
        but definitely their base while in town.
        </p>
        <p className="flavourtext">With the reward money on your minds, one evening you travel to the inconspicuous
        building you believe houses the lair. After searching for a while you locate a hidden panel,
        revealing an elevator that carries you down, deep down into the belly of the Earth. As it
        slows to a stop, you can't help yourself: you give a loud, celebratory exclamation of your
        success.
        </p>
        <p className="flavourtext">At the sound of your voice, the elevator stops.</p>
        <p className="flavourtext">Then a cross beeping begins.</p>
        <p className="flavourtext">Not liking that at all, <Link to="/">you prise the doors open...</Link></p>
    </div>
}