import random

class DiffieHellman:
    def __init__(self, p, g):
        self.p = p
        self.g = g
        self.private_key = random.randint(1, p-1)
        self.public_key = pow(g, self.private_key, p)

    def get_public_key(self):
        return self.public_key

    def compute_shared_secret(self, other_public_key):
        return pow(other_public_key, self.private_key, self.p)


p = 23
g = 5

alice = DiffieHellman(p, g)
bob = DiffieHellman(p, g)

alice_public_key = alice.get_public_key()
bob_public_key = bob.get_public_key()

alice_shared_secret = alice.compute_shared_secret(bob_public_key)
bob_shared_secret = bob.compute_shared_secret(alice_public_key)

print("Alice's shared secret:", alice_shared_secret)
print("Bob's shared secret:", bob_shared_secret)
