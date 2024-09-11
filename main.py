msg = "Olá!"


def teste ():
    global msg
    print(msg)
    msg = 'Heee'
    print(msg)


teste()

print(msg)