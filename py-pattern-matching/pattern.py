
command = ["print", "this"]

match command:
    case ["print"]:
        print('something')
    case ["print", whatever]:
        print(whatever)
    case all_other:
        print(all_other)
