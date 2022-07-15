import "./Heroes.css";
import { Link } from "react-router-dom";

export function Heroes() {
    return (
        <div>
            <h1>Close-up of the computer screen</h1>
        <p></p>
            <h2> A text document opens: </h2>
            <p></p>
            <p className="heroestext">Of my five greatest enemies, only Force of Nature eludes me. But that will change very soon 
–- nobody has ever unmasked the Big Five before, and certainly nobody's killed one, let alone 
four. It's taken time, and endless deductive reasoning, but I was more than capable, and I 
relish in the memories. As I reminisce, a few thoughts in particular stand out:</p>
            <p className="heroestext">Jane Ewing was my first kill. Far easier than I expected killing a hero to be. Even with those 
thick glasses she didn't see my ambush.</p>
            <p className="heroestext">Pure Platinum, the one with power over metal, should have gotten a haircut. Long hair made 
grabbing her all the easier.</p>
            <p className="heroestext">While searching for Force of Nature, I learned they were blonde, unlike that Sam Howitz 
fellow.</p>
            <p className="heroestext">I actually found myself coming to respect Taylor Prescott. Why? No needless jewellery. It's 
idiotic what some heroes wear.</p>
            <p className="heroestext"> remember when I learned that Sam Howitz had power over fire. It was an exciting moment; 
before then I thought he was the one with power over wind or ice, and that Maxwell Martin 
had fire.</p>
            <p className="heroestext">And of course, there was the moment I killed Avery Lee. I'll never forget it.
</p>
            <p className="heroestext">Then, at long last –- but I won't write any more here. I doubt anyone will ever read this 
document, but I'm not foolish enough to risk it. I won't let anyone use my genius to procure 
that silly reward.</p>
            <p></p>
            <Link to="/computer2" className="flavourtext"> Return </Link> 
        </div>
    )
}