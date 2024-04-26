import random

class DiffieHellman:
    def __init__(self, p, g):
        # Initialize the object with a prime number p and a generator g
        self.p = p
        self.g = g

        # Generate a private key, which is a random number between 1 and p-1
        self.private_key = random.randint(1, p-1)

        # Compute the public key using the formula: public_key = g^private_key mod p
        self.public_key = pow(g, self.private_key, p)

    def get_public_key(self):
        # Return the public key
        return self.public_key

    def compute_shared_secret(self, other_public_key):
        # Compute the shared secret using the formula: shared_secret = other_public_key^private_key mod p
        return pow(other_public_key, self.private_key, self.p)


# Example usage:
p = 23 
g = 5

alice = DiffieHellman(p, g)
bob = DiffieHellman(p, g)

alice_public_key = alice.get_public_key()
bob_public_key = bob.get_public_key()

# Alice computes her shared secret using Bob's public key
alice_shared_secret = alice.compute_shared_secret(bob_public_key)

# Bob computes his shared secret using Alice's public key
bob_shared_secret = bob.compute_shared_secret(alice_public_key)

print("Alice's shared secret:", alice_shared_secret)
print("Bob's shared secret:", bob_shared_secret)
