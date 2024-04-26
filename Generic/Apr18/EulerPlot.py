import matplotlib.pyplot as plt
import Euler

def f(t, y):
    return -y

y0 = 1
t = [i*0.1 for i in range(100)]

y = Euler.euler_method(f, y0, t)

plt.plot(t, y)
plt.xlabel('Time')
plt.ylabel('y')
plt.title('Solution of dy/dt = -y with y(0) = 1 using Euler\'s Method')
plt.grid(True)
plt.show()
