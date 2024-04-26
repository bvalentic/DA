import secrets
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.backends import default_backend

class DiffieHellman:
    def __init__(self, p, g):
        self.p = p
        self.g = g
        self.private_key = secrets.randbelow(p-1) + 1
        self.public_key = pow(g, self.private_key, p)

    def get_public_key(self):
        return self.public_key

    def compute_shared_secret(self, other_public_key):
        return pow(other_public_key, self.private_key, self.p)


# Using a large prime number for p
p = 0xFFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE65381FFFFFFFFFFFFFFFF
g = 12

alice = DiffieHellman(p, g)
bob = DiffieHellman(p, g)

alice_public_key = alice.get_public_key()
bob_public_key = bob.get_public_key()

alice_shared_secret = alice.compute_shared_secret(bob_public_key)
bob_shared_secret = bob.compute_shared_secret(alice_public_key)

print("Alice's shared secret:", alice_shared_secret)
print("Bob's shared secret:", bob_shared_secret)
print("The secrets are equal:", alice_shared_secret == bob_shared_secret)
