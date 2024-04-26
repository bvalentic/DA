def euler_method(f, y0, t):
    """
    Implements Euler's method for numerical analysis.

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
        y.append(y[i] + h*f(t[i], y[i]))

    return y

def f(t, y):
    return -y

y0 = 1
t = [i*0.1 for i in range(100)]

y = euler_method(f, y0, t)
