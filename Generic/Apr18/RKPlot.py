import matplotlib.pyplot as plt
import RKSimple

def f(t, y):
    return -y

y0 = 1
t = [i*0.1 for i in range(100)]

y = RKSimple.runge_kutta(f, y0, t)

plt.plot(t, y)
plt.xlabel('Time')
plt.ylabel('y')
plt.title('Solution of dy/dt = -y with y(0) = 1')
plt.grid(True)
plt.show()
