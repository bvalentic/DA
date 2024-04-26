public enum ShipType { Sloop, Brig, Frigate }

public class Captain {
    public string Name { get; set; }
    public int ExperienceYears { get; set; }
}

public class CrewMember {
    public string Name { get; set; }
    public string Position { get; set; }
}

public class Ship {
    public string Name { get; set; }
    public Captain Captain { get; set; }
    public List CrewMembers { get; set; } = new List();
    public ShipType Type { get; set; }
    public double Length { get; set; }
    public double Beam { get; set; }
    public double Draft { get; set; }
}
