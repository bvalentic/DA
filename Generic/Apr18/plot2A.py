import pandas as pd
import matplotlib.pyplot as plt

# Load the csv file into a pandas DataFrame
df = pd.read_csv('sampleEarnings.csv')

# Convert the 'Date' column to datetime type
df['Date'] = pd.to_datetime(df['Date'])

# Create the plot
plt.figure(figsize=(10,6))
plt.plot(df['Date'], df['Amount Made'])

# Add title and labels
plt.title('Daily Earnings')
plt.xlabel('Date')
plt.ylabel('Amount Made ($)')
plt.xticks(rotation=45)  # Rotate the x-axis labels for better readability

# Display the plot
plt.show()
