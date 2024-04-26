// Create a new port
Port myPort = new Port();
myPort.Name = "My Port";

// Create some ships
Ship ship1 = new Ship();
ship1.Name = "Black Pearl";
ship1.Type = ShipType.Frigate;

Ship ship2 = new Ship();
ship2.Name = "Sea Dragon";
ship2.Type = ShipType.Brig;

// Add the ships to the port
myPort.AddShip(ship1);
myPort.AddShip(ship2);

// Print out the list of ships in the port
Console.WriteLine("Ships in My Port:");
myPort.ListShips();

// Remove one of the ships from the port
myPort.RemoveShip(ship1);

// Print out the updated list of ships in the port
Console.WriteLine("\nUpdated list of ships in My Port:");
myPort.ListShips();
