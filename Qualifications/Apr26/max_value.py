import pandas as pd

data = {
    "A": [5, 6, 8, 9, 7],
    "B": ["Flamingo", "Zebra", "Cart", "Bucket", "Samantha"],
    "C": ["Some", "Alex", "Apple", 5, "Art"]
}

df = pd.DataFrame(data)

max_value1 = df[df["B"].str.len() > 4 & df["C"].str.startswith("A")]["A"].max()
# max_value2 = df[(df["B"].str.len() > 4) & (df["C"].str.startswith("A"))].max()
max_value3 = df[(df["B"].str.len() > 4) & (df["C"].str.startswith("A"))]["A"].max()
# max_value4 = df[(df["B"].len() > 4) & (df["C"].startswith("A"))]["A"].max()

print("1: " + str(max_value1))
# print("2: " + str(max_value2))
print("3: " + str(max_value3))

data2 = {
    "Team": ["A", "B"],
    "Score": [50, 100]
}

df2 = pd.DataFrame(data2)
result = df2.groupby("Team")["Score"].apply(lambda x: (x > 85).sum())

print(result)
