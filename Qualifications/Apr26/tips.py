import pandas as pd

data = {
    "Receipt ID": ["124DC", "4442A", "222BZ", None, "5421T"],
    "Waiter/Waitress Name": ["Todd", None, "Lenny", "Jennifer", "Yazmin"],
    "Tip Amount": [12, 4, 3, 44, 29]
}

df = pd.DataFrame(data)
print(df)

df.fillna("Unknown", inplace=True)
# df["Receipt ID"] = df["Receipt ID"].fillna("Unknown")
# df.fillna({"Receipt ID": "Unknown"})
# df = df.fillna("Receipt ID": "Unknown")

print(df)