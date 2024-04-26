public class Port {
    public string Name { get; set; }
    public List ShipsInPort { get; set; } = new List();

    // Method to add a ship to the port
    public void AddShip(Ship ship) {
        ShipsInPort.Add(ship);
    }

    // Method to remove a ship from the port
    public bool RemoveShip(Ship ship) {
        return ShipsInPort.Remove(ship);
    }

    // Method to list all ships in the port
    public void ListShips() {
        foreach (var ship in ShipsInPort) {
            Console.WriteLine($"Name: {ship.Name}, Type: {ship.Type}");
        }
    }
}
