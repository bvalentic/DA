import pandas as pd
import matplotlib.pyplot as plt

# Load the csv file into a pandas DataFrame
df = pd.read_csv('sampleEarnings.csv')

# Convert the 'Date' column to datetime format
df['Date'] = pd.to_datetime(df['Date'])

# Create the plot
plt.plot(df['Date'], df['Amount Made'])

# Add title and labels
plt.title('Earnings Over Time')
plt.xlabel('Date')
plt.ylabel('Amount Made')

# Display the plot
plt.show()
