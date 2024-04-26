def runge_kutta(f, y0, t):
    """
    Implements the 4th order Runge-Kutta method for numerical analysis.

    Parameters:
    f (function): The derivative function.
    y0 (float): The initial value of y.
    t (list): A list of time points.

    Returns:
    y (list): A list of y values at each time point.
    """
    n = len(t)
    h = t[1] - t[0]
    y = [y0]

    for i in range(n-1):
        k1 = f(t[i], y[i])
        k2 = f(t[i] + 0.5*h, y[i] + 0.5*h*k1)
        k3 = f(t[i] + 0.5*h, y[i] + 0.5*h*k2)
        k4 = f(t[i] + h, y[i] + h*k3)

        y.append(y[i] + (h/6)*(k1 + 2*k2 + 2*k3 + k4))

    return y

# Example function, dt/dy = some function f(t, y)
def f(t, y):
    return -y

# initial value, y(t0) = y0
y0 = 1
t = [i*0.1 for i in range(100)]

y = runge_kutta(f, y0, t)

# Print the solution
for i in range(len(t)):
    print(f"t = {t[i]}, y = {y[i]}")
