import matplotlib.pyplot as plt
import Euler
import RKSimple

def f(t, y):
    return -y

y0 = 1
t = [i*0.1 for i in range(100)]

y_rk = RKSimple.runge_kutta(f, y0, t)
y_euler = Euler.euler_method(f, y0, t)

plt.plot(t, y_rk, label='Runge-Kutta')
plt.plot(t, y_euler, label='Euler')
plt.xlabel('Time')
plt.ylabel('y')
plt.title("Solution of dy/dt = -y with y(0) = 1")
plt.legend()
plt.grid(True)
plt.show()
