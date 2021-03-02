import time

while True:
    with open("/opt/fruits", "r") as f:
        for line in f:
            print(line)
    time.sleep(1)


