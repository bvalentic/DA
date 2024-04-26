using System;

public class DiffieHellman
{
    private int p;
    private int g;
    private int privateKey;
    private int publicKey;

    public DiffieHellman(int p, int g)
    {
        this.p = p;
        this.g = g;
        this.privateKey = new Random().Next(1, p);
        this.publicKey = (int)Math.Pow(g, privateKey) % p;
    }

    public int GetPublicKey()
    {
        return publicKey;
    }

    public int ComputeSharedSecret(int otherPublicKey)
    {
        return (int)Math.Pow(otherPublicKey, privateKey) % p;
    }
}

class Program
{
    static void Main(string[] args)
    {
        int p = 23;
        int g = 5;

        DiffieHellman alice = new DiffieHellman(p, g);
        DiffieHellman bob = new DiffieHellman(p, g);

        int alicePublicKey = alice.GetPublicKey();
        int bobPublicKey = bob.GetPublicKey();

        int aliceSharedSecret = alice.ComputeSharedSecret(bobPublicKey);
        int bobSharedSecret = bob.ComputeSharedSecret(alicePublicKey);

        Console.WriteLine("Alice's shared secret: " + aliceSharedSecret);
        Console.WriteLine("Bob's shared secret: " + bobSharedSecret);
    }
}
