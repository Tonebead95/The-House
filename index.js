class Room {
    constructor(name) {
        this._name = name;
        this._description = "";
        this._linkedRooms = {};
        this._character = "";
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

    set description(value) {
        if (value.length < 4) {
            alert("description is too short.");
            return;
        }
        this._description = value;
    }

    linkRooms(direction, room) {
        this._linkedRooms[direction] = room;
    }



    move(direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction]
        } else {
            alert("You can't go that way!",);
            return this;
        }
    }
}

const outSide = new Room("Outside")
outSide._description = "You stand outside a rather large house, as you approach the house the decrepid doors swing open. Do you dear enter?"
const Stairs = new Room("Stairs")
Stairs._description = "As you climb the stairs, there is a cold draft and you swear that breeze hisses the word 'RUN'. As you come to the top of the stairs you notice two doors, one of the doors has the words 'MASTER' written above it. Which way will you go?"
const Bathroom = new Room("Bathroom")
Bathroom._description = ""
const Bedroom = new Room("Bedroom")
Bedroom._description = ""
const Corridor = new Room("Corridor")
Corridor._description = ""
const livingRoom = new Room("Living Room")
livingRoom._description = ""
const diningRoom = new Room("Dining Room")
diningRoom._description = ""
const Kitchen = new Room("Kitchen")
Kitchen._description = ""
const Basement = new Room("Basement")
Basement._description = ""
const entranceHall = new Room("Entrance Hall")
entranceHall._description = "As you eneter you are greeted with an eerie chill. You noticed a grand set of stairs in front of you and a doorway either side. Which path will you take?"
const masterBedroom = new Room("Master Bedroom")
masterBedroom._description = ""
const enSuite = new Room("En Suite")
enSuite._description = ""

outSide.linkRooms("north", entranceHall);
entranceHall.linkRooms("south", outSide);
entranceHall.linkRooms("east", livingRoom);
entranceHall.linkRooms("west", diningRoom);
entranceHall.linkRooms("north",Stairs);
livingRoom.linkRooms("north", Kitchen);
diningRoom.linkRooms("north", Kitchen);
Kitchen.linkRooms("south", livingRoom);
Kitchen.linkRooms("south", diningRoom);
Kitchen.linkRooms("west", Basement);
Stairs.linkRooms("east", Bedroom);
Stairs.linkRooms("west", masterBedroom);
Stairs.linkRooms("south", entranceHall);
Bedroom.linkRooms("north", Bathroom);
Bedroom.linkRooms("south", Stairs);
Bathroom.linkRooms("south", Bedroom);
masterBedroom.linkRooms("north", enSuite);
masterBedroom.linkRooms("south", Stairs);
enSuite.linkRooms("south", masterBedroom);


function displayRoomInfo(room) {
    document.getElementById("textarea").innerHTML = room.description;
    const userInput = document.getElementById("usertext");
    if (userInput) {
        userInput.focus();
    }

    document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" />';
    document.getElementById("usertext").focus();
}

function startGame() {
    currentRoom = outSide;
    displayRoomInfo(currentRoom);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            command = document.getElementById("usertext").value;
            const directions = ["north", "south", "east", "west"]
            if (directions.includes(command.toLowerCase())) {
                currentRoom = currentRoom.move(command)
                displayRoomInfo(currentRoom);
            } else {
                document.getElementById("usertext").value = ""
                alert("that is not a valid command please try again")
            }

        }
    });
}









