import pandas as pd
import matplotlib.pyplot as plt

# Load the CSV file into a pandas DataFrame
df = pd.read_csv('your_file.csv')

# Assume the first column is the x-axis and the second column is the y-axis
x = df.iloc[:, 0]
y = df.iloc[:, 1]

# Create the plot
plt.plot(x, y)

# Add title and labels
plt.title('Your Graph Title')
plt.xlabel('X-axis Label')
plt.ylabel('Y-axis Label')

# Display the plot
plt.show()
