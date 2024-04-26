def runge_kutta_4th_order(f, y0, x0, x_end, h):
    """
    Solve the differential equation y' = f(x, y) using the 4th order Runge-Kutta method.

    Parameters:
    f (function): The derivative function.
    y0 (float): The initial value of y.
    x0 (float): The initial value of x.
    x_end (float): The end value of x.
    h (float): The step size.

    Returns:
    list: A list of tuples (x, y) representing the solution at each step.
    """

    # Initialize the list to store the solution
    solution = [(x0, y0)]

    # Calculate the number of steps
    n_steps = int((x_end - x0) / h)

    # Iterate over each step
    for _ in range(n_steps):
        x, y = solution[-1]

        # Calculate k1, k2, k3, and k4
        k1 = f(x, y)
        k2 = f(x + 0.5 * h, y + 0.5 * h * k1)
        k3 = f(x + 0.5 * h, y + 0.5 * h * k2)
        k4 = f(x + h, y + h * k3)

        # Calculate the new value of y
        y_new = y + (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4)

        # Calculate the new value of x
        x_new = x + h

        # Append the new point to the solution
        solution.append((x_new, y_new))

    return solution

# Define the derivative function
def f(x, y):
    return x + y

# Solve the ODE
solution = runge_kutta_4th_order(f, 1, 0, 10, 0.1)

# Print the solution
for x, y in solution:
    print(f"x = {x}, y = {y}")
