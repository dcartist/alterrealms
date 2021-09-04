import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../Components/Image/Profile'
import loading from "../../Images/loading.svg"
import missing from "../../Images/mortyrickmissing.png"
import axios from 'axios'
import { Hint } from 'react-autocomplete-hint';


export default function PlayerSearch(props) {

    const options = ["Canklanker Thom", "Campaign Manager Morty", "Centaur", "Chris", "Chris", "Coach Feratu (Balik Alistane)", "Collector", "Colossus", "Commander Rick", "Concerto", "Conroy", "Cool Rick", "Cop Morty", "Courier Flap", "Cop Rick", "Cousin Nicky", "Cowboy Morty", "Cowboy Rick", "Crab Spider", "Creepy Little Girl", "Arcade Alien", "Aqua Morty", "Aqua Rick", "Armothy", "Armagheadon", "Artist Morty", "Arthricia", "Attila Starwar", "Baby Legs", "Baby Poopybutthole", "Baby Wizard", "Bearded Lady", "Beebo", "Benjamin", "Bepisian", "Beta-Seven", "Beth Sanchez", "Beth Smith", "Beth Smith", "Beth's Mytholog", "Hydrogen-F", "Ice-T", "Ideal Jerry", "Insurance Rick", "Investigator Rick", "Invisi-trooper", "Izzy", "Jackie", "Jacob", "Jacqueline", "Jaguar", "Jamey", "Jan-Michael Vincent", "Jerry 5-126", "Celebrity Jerry", "Jerry Smith", "Jerry Smith", "Jerry's Mytholog", "Jessica", "Jessica", "Photography Cyborg", "Photography Raptor", "Pibbles Bodyguard", "Pichael Thompson", "Pickle Rick", "Piece of Toast", "Plumber Rick", "Poncho", "Presidentress of The Mega Gargantuans", "Prince Nebulon", "Principal Vagina", "Principal Vagina", "Purge Planet Ruler", "Quantum Rick", "Randy Dicknose", "Rat Boss", "Real Fake Doors Salesman", "Regional Manager Rick", "Reverse Giraffe", "Regular Legs", "The Wizard", "Netflix Executive", "Balthromaw", "Talking Cat", "Debrah", "Debrah’s Partner", "Michael", "Slut Dragon", "Shadow Jacker", "Chachi", "Slippy", "Robot Snake", "Snake Hitler", "Snake Lincoln", "Snake Resistance Robot", "Snake Linguist", "Snake Terminator", "Snake Soldier", "Snake with Legs", "Secret Service Snake", "Fart", "Father Bob", "Eyehole Man", "Fat Morty", "Fleeb", "Flansian", "Frank Palicky", "Frankenstein's Monster", "Fulgora", "Galactic Federation President", "Gar Gloonch", "Gar's Mytholog", "Garblovian", "Garmanarnar", "Garment District Rick", "Gazorpazorpfield", "Gene", "General Nathan", "General Store Owner", "Genital Washer", "Toxic Rick", "Traflorkian", "Trandor", "Tree Person", "Tricia Lange", "Trunk Morty", "Trunk Man", "Truth Tortoise", "Two Guys with Handlebar Mustaches", "Tumblorkian", "Tusked Assassin", "Unity", "Unmuscular Michael", "Vance Maximus", "Veronica Ann Bennet", "Voltematron", "Vampire Master", "Wall Crawling Rick", "Weird Rick", "Wedding Bartender", "E. Coli", "Donna Gueterman", "Doofus Rick", "Doom-Nomitron", "Dr. Glip-Glop", "Dr. Schmidt", "Dr. Wong", "Dr. Xenon Bloom", "Duck With Muscles", "Eli", "Eli's Girlfriend", "Eric McMan", "Eric Stoltz Mask Morty", "Ethan", "Ethan", "Evil Beth Clone", "Evil Jerry Clone", "Evil Morty", "Evil Rick", "Evil Summer Clone", "Crocubot", "Cronenberg Rick", "Cronenberg Morty", "Cult Leader Morty", "Cyclops Morty", "Cyclops Rick", "Cynthia", "Cynthia", "Dale", "Daron Jefferson", "David Letterman", "Davin", "Diablo Verde", "Diane Sanchez", "Dipper and Mabel Mortys", "Tuberculosis", "Gonorrhea", "Hepatitis C", "Hepatitis A", "Bubonic Plague", "Samantha", "Ruben", "Ron Benson", "Scary Glenn", "Scary Terry", "Scroopy Noopers", "Scropon", "Scary Brandon", "Scrotian", "Shimshamian", "Self-Congratulatory Jerry", "Shlaammi", "Shleemypants", "Shmlamantha Shmlicelli", "Shmlangela Shmlobinson-Shmlower", "Shmlona Shmlobinson", "Shmlonathan Shmlower", "Shmlony Shmlicelli", "Shmooglite Runner", "Shnoopy Bloopers", "Sarge", "Ruth Bader Ginsburg", "Shrek The Musical Fan", "Storylord", "Snuffles", "Tammy Guetermann", "Beth Smith", "The Concept of Time", "Summer Smith", "Morty Smith", "Rick Sanchez", "Train Cop", "Train Cops", "Train Cops Instructor", "Darth Poopybutthole", "Evil Morty", "Morty’s Disguise", "Rick’s Disguise", "Uncle Nibbles", "Angry Glorzo", "Christmas Storyteller", "Cookies Guy", "Female Scorpion", "Crossy", "Floaty Bloody Man’s Daughter", "Goomby", "Hairspray Fan", "Jesus Christ", "Josh", "Josh's Sister", "Leah", "Marcus", "Mike Johnson", "Mr. Celery & Friends", "Musical Fan", "Phantom of the Opera Fan", "Phoenixperson", "Private Smith", "Professor Sanchez", "Ramamama Lord", "Ghost in a Jar", "Gibble Snake", "Glasses Morty", "Glenn", "Glenn", "Glexo Slim Slom", "Gobo", "Goddess Beth", "Gordon Lunas", "Cornvelious Daniel", "Gwendolyn", "Hammerhead Morty", "Hamster In Butt", "Hamurai", "Harold", "Hemorrhage", "Hole in the Wall Where the Men Can See it All", "Hookah Alien", "Hunter", "Hunter's Father", "Melissa", "Michael Jenkins", "Michael McLick", "Michael Denny and the Denny Singers", "Michael Thompson", "Million Ants", "Mitch", "Morty Jr.", "Morty Mart Manager Morty", "Mohawk Guy", "Morty Smith", "Morty Rick", "Morty K-22", "Morty Smith", "Mortytown Loco", "Mr. Beauregard", "Mr. Benson", "Mr. Booby Buyer", "Mr. Goldenfold", "Mr. Goldenfold", "Reverse Rick Outrage", "Revolio Clockberg Jr.", "Rick D. Sanchez III", "Rick Guilt Rick", "Rick Prime", "Rick D-99", "Rick D716", "Rick D716-B", "Rick D716-C", "Rick Sanchez", "Rick J-22", "Rick K-22", "Rick Sanchez", "Ricktiminus Sancheziminius", "Riq IV", "Risotto Groupon", "Risotto's Tentacled Henchman", "Robot Morty", "Robot Rick", "Roger", "Jessica's Friend", "Jim", "Jon", "Joseph Eli Lipkip", "Johnny Depp", "Joyce Smith", "Juggling Rick", "Karen Entity", "Keara", "Katarina", "Kevin", "King Flippy Nips", "King Jellybean", "Kristen Stewart", "Kozbian", "Krombopulos Michael", "Kyle", "Lady Katana", "Larva Alien", "Lawyer Morty", "Secretary at Tony's", "Vermigurber", "Mountain Sweat Jerry", "Heist-Con Receptionist", "Miles Knightly", "Truckula", "Glar", "Snake Arms", "Angie Flint", "Monitor Lord", "Key Catcher", "Double Microwawe", "The Shapeshiftress", "Heistotron", "Randotron", "Hephaestus", "Ventriloquiver", "Elon Tusk", "Gramuflackian Anchorman", "Gramuflackian General", "Anchosnake", "Anchosnake", "80's snake", "Bar Customer", "Bartender", "PC Basketball Player", "Cavesnake", "Snake Reporter", "High Pilot", "Pet Shop Employee", "High Pilot", "Tickets Please Guy", "Phoenixperson", "Floaty Bloody Man", "Floaty Non-Gasm Brotherhood Member Friend", "Abradolf Lincler", "Biblesaurus", "Birdperson", "Cats Fan", "Retired General Rick", "Sheik Rick", "Steve Jobs Rick", "Secret Service Rick", "Modern Rick", "Visor Rick", "Tan Rick", "Colonial Rick", "P-Coat Rick", "Chang", "Dr. Eleanor Arroway", "Floaty Non-Gasm Brotherhood Member", "Varrix", "Crystal Poacher", "Crystal Poacher", "Secretary of the Interior", "Crystal Poacher", "Hologram Rick", "Fascist Rick", "Fascist Morty", "Fascist Mr. President", "Morty Smith", "Summer Smith", "Rick Sanchez", "Beth Smith", "Jerry Smith", "Abadango Cluster Princess", "Abradolf Lincler", "Adjudicator Rick", "Agency Director", "Alan Rails", "Alexander", "Alien Googah", "Alien Morty", "Alien Rick", "Amish Cyborg", "Annie", "Antenna Morty", "Albert Einstein", "Antenna Rick", "Ants in my Eyes Johnson", "Wasp Beth", "Caterpillar Mr. Goldenfold’s Larvae", "Kirkland Brand Mr. Meeseeks", "Boglin", "Danny Publitz", "Glootie", "Mothership Intern", "Monogatron Leader", "Lizard", "Deliverance", "Tony", "Tony’s Wife", "Monogatron Queen", "Jeff", "Tony's Dad", "Josiah", "Maggie", "Priest Witherspoon", "Richard", "Running Bird", "Communication's Responsible Rick", "Teleportation's Responsible Rick", "SEAL Team Rick", "SEAL Team Rick", "SEAL Team Rick", "Morphizer-XE Customer Support", "SEAL Team Rick", "Morphizer-XE Customer Support", "Morphizer-XE Customer Support", "Little Voltron", "Alien Spa Employee", "Baby Rick", "Bartender Morty", "Dancer Cowboy Morty", "Dancer Morty", "Hairdresser Rick", "Flower Morty", "Journalist Rick", "Private Sector Rick", "Purple Morty", "Shaved Head Jerry", "Bearded Jerry", "Tank Top Jerry", "Pink Polo Shirt Jerry", "Jerryboree Keeper", "Jerryboree Receptionist", "Anchor Gear", "Gear Cop", "Roy's Mum", "Roy's Wife", "Roy's Son", "Simon", "Vampire Master's Assistant", "Arbolian Mentirososian", "St. Gloopy Noops Nurse", "Nano Doctor", "Funny Songs Presenter", "Tax Attorney", "Butthole Ice Cream Guy", "Traflorkian Journalist", "Simple Rick", "Shrimply Pibbles", "Slick Morty", "Slippery Stair", "Slaveowner", "Slow Mobius", "Sleepy Gary", "Slow Rick", "Snuffles (Snowball)", "snowball", "snuffles", "rick", "morty", "Solicitor Rick", "Squanchy", "Stacy", "Stair Goblin", "Stealy", "Steve", "Steven Phillips", "Summer Smith", "Stu", "Summer Smith", "Supernova", "Leonard Smith", "Lighthouse Keeper", "Lil B", "Lisa", "Little Dipper", "Lizard Morty", "Loggins", "Logic", "Long Sleeved Morty", "Lucy", "Ma-Sha", "Magma-Q", "Magnesium-J", "Man Painted Silver Who Makes Robot Noises", "Maximums Rickimus", "MC Haps", "Mechanical Morty", "Mechanical Rick", "Mechanical Summer", "Mega Fruit Farmer Rick", "Big Boobed Waitress", "Big Head Morty", "Big Morty", "Body Guard Morty", "Bill", "Bill", "Birdperson", "Black Rick", "Blamph", "Blim Blam", "Blue Diplomat", "Blue Footprint Guy", "Blue Shirt Morty", "Bobby Moynihan", "Boobloosian", "Bootleg Portal Chemist Rick", "Borpocian", "Brad", "Brad Anderson", "Calypso", "Taint Washer", "Tammy Guetermann", "Tammy Guetermann", "Teacher Rick", "Terry", "The President", "Taddy Mason", "The President of the Miniverse", "Thomas Lipkip", "The Scientist Formerly Known as Rick", "Three Unknown Things", "Tinkles", "Toby Matthews", "Todd Crystal", "Tiny Rick", "Tom Randolph", "Tommy's Clone", "Tophat Jones", "Tortured Morty", "Toxic Morty", "Mr. Marklovitz", "Mr. Meeseeks", "Mr. Needful", "Mr. Poopybutthole", "Mrs. Lipkip", "Mrs. Pancakes", "Mrs. Poopybutthole", "Mrs. Refrigerator", "Mrs. Sanchez", "Mrs. Sullivan", "Nancy", "Noob-Noob", "Numbericon", "Octopus Man", "Orthodox Jew", "Pat Gueterman", "Paul Fleishman", "Pawnshop Clerk", "Pencilvester", "Rich Plutonian", "Phillip Jacobs", "Rich Plutonian", "Pizza-person", "Synthetic Laser Eels", "Pizza-person", "Greasy Grandma", "Phone-person", "Phone-person", "Chair-person", "Chair-waiter", "Chair-homeless", "Chair-person", "Super Weird Rick", "Pripudlian", "Doopidoo", "Giant Testicle Monster", "Michael's Lawyer", "Veterinary", "Veterinary Nurse", "Morty’s Girlfriend", "Reggie", "Gaia", "Michael", "Florflock", "Ticktock", "Defiance Beth", "Squeeb", "Defiance Squanchette", "Defiance Doctor", "New Improved Galactic Federation Guard", "New Improved Galactic Federation Guard", "Morty Jr's interviewer", "Guy from The Bachelor", "Corn detective", "Michael Jackson", "Trunkphobic suspenders guy", "Spiderweb teddy bear", "Quick Mystery Presenter", "Mr. Sneezy", "Regular Tyrion Lannister", "Alien Mexican Armada", "Two Brothers", "Giant Cat Monster", "Old Women", "Trunkphobic guy", "Plutonian Host", "Pro trunk people marriage guy", "Fascist Shrimp Rick’s Clone", "Revolio Clockberg Jr.", "Fascist Teddy Bear Rick", "Fascist Rick’s Clone", "Fascist Shrimp Morty", "Morty’s Lawyer", "Baby Legs Chief", "Bully", "Anchorwoman", "Fascist Shrimp SS", "Muscular Mannie", "Anchorman", "Fascist Teddy Bear Rick’s Clone", "Fascist Shrimp Rick", "Plutonian Hostess", "Mrs. Sullivan's Boyfriend", "Judge", "Public Opinion Judge", "Caterpillar Mr. Goldenfold", "Wasp Rick", "Wasp Rick’s Clone", "Wasp Morty", "Wasp Summer", "Wasp Jerry", "Woman Rick", "Worldender", "Yaarb", "Yellow Headed Doctor", "Yellow Shirt Rick", "Zarbadar Gloonch", "Zarbadar's Mytholog", "Zeep Xanflorp", "Zeta Alpha Rick", "Zick Zack", "Uncle Steve", "Bearded Morty", "Roy", "Davin", "Greebybobe", "Scary Teacher", "Accountant dog", "Fido", "Bruce", "Tiny-persons advocacy group lawyer", "Council of Glorzos Member", "Council of Glorzos Member", "Giant Judge", "Old Glorzo", "Shane", "Steve", "Crystal Dealer", "Crystal Dealers Boss", "Troy", "Crystal Dealer", "SWAT Officer", "Plane Crash Survivor", "Plane Crash Survivor", "Crystal Dealer", "Heroine Keith", "Impervious to Acid SWAT Officer", "Johnny Carson", "Sonia Sotomayor", "Morty’s Father-in-law", "Morty’s Mother-in-law"]
    const [text, setText] = useState('')
    const [altering, setaltering] = useState(true)
    const [characters, setcharacters] = useState([])
    const [found, setfound] = useState(true)
    const [name, setname] = useState('')
    useEffect(() =>
        axios.get("https://immense-refuge-56824.herokuapp.com/api/top/20").then(results => {
            setcharacters(results.data)
            console.log(characters)
        }), [])

    function findByName(info) {
        axios.get(`https://immense-refuge-56824.herokuapp.com/api/character/name/${info}`).then(results => {
            if (results.data.length == 0) {
                setfound(false)
                setcharacters([])
            } else {

                setcharacters(results.data)
            }
        })
    }

    function searchTime(e) {
        e.preventDefault()
        setfound(true)
        setname(text)
        findByName(text)
    }


    if (characters.length == 0 && !found) {
        return (
            <div className="players-section-base">
                <div className="player-form">
                    <form>
                        <Hint options={options} allowTabFill={true}>
                            <input
                                value={text} onChange={e => setText(e.target.value)} />
                        </Hint>
                        <button onClick={searchTime} className="realm-btn btn">Submit</button>
                    </form>
                    <div className="player-buttons">
                        <button onClick={() => findByName("rick")} className="btn"> All Ricks </button>
                        <button onClick={() => findByName("morty")} className="btn"> All Morties </button>
                        <button onClick={() => findByName("beth")} className="btn"> All Beths </button>
                        <button onClick={() => findByName("summer")} className="btn"> All Summers </button>
                        <button onClick={() => findByName("jerry")} className="btn"> And Jerry </button>
                    </div>
                </div>
                <div className="players">
                    <div className="missing-character">
                        <div>
                            <img src={missing} className="shadow-graphic" />
                        </div>
                        <h1 className="shadow-graphic"> {name} was not found </h1>
                    </div>
                </div>

            </div>
        )
    } else if (characters.length == 0 && found) {
        return (
            <div className="players-section-base">
                <div className="player-form">
                    <form>
                        <Hint options={options} allowTabFill={true}>
                            <input
                                value={text} onChange={e => setText(e.target.value)} />
                        </Hint>
                        <button onClick={searchTime} className="realm-btn btn">Submit</button>
                    </form>
                    <div className="player-buttons">
                        <button onClick={() => findByName("rick")} className="btn"> All Ricks </button>
                        <button onClick={() => findByName("morty")} className="btn"> All Morties </button>
                        <button onClick={() => findByName("beth")} className="btn"> All Beths </button>
                        <button onClick={() => findByName("summer")} className="btn"> All Summers </button>
                        <button onClick={() => findByName("jerry")} className="btn"> And Jerry </button>
                    </div>
                </div>
                <div className="players">
                    <div className="loading">
                        <img src={loading} className="shadow-graphic" />
                        <h1 className="shadow-graphic">Loading...</h1>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="players-section-base">
                <div className="player-form">
                    <form>
                        <Hint options={options} allowTabFill={true}>
                            <input
                                value={text} onChange={e => setText(e.target.value)} />
                        </Hint>
                        <button onClick={searchTime} className="realm-btn btn">Submit</button>
                    </form>
                    <div className="player-buttons">
                        <button onClick={() => findByName("rick")} className="btn"> All Ricks </button>
                        <button onClick={() => findByName("morty")} className="btn"> All Morties </button>
                        <button onClick={() => findByName("beth")} className="btn"> All Beths </button>
                        <button onClick={() => findByName("summer")} className="btn"> All Summers </button>
                        <button onClick={() => findByName("jerry")} className="btn"> And Jerry </button>
                    </div>
                </div>
                <div className="players">
                    {characters.map((item, index) =>
                        <Link to="/sm/weapon" key={index} onClick={() => props.selectPlayer(item)}> <Profile {...item}></Profile></Link>
                    )}
                </div>
            </div>
        )
    }
}
