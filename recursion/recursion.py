json = [
        {"value": 3, "other": 5},
        {"value": 3, "other": 5, "pivot": [
            {"value": 4, "other": 6}
        ]},
        {"value": 3, "other": 7},
        {"value": 3, "other": 8},
]


def parse(json, output = []):
    for row in json:
        parsed_row = []
        parsed_row.append(row["value"])
        parsed_row.append(row["other"])
        if "pivot" in row:
            parse(row["pivot"])
        output.append(parsed_row)
    return output

result = parse(json)
print(result)
