# Extending list (not idiomatic Python)
class MyList(list):
    def each(self, func):
        for i in self:
            func(i)

a = MyList([1, 2, 3, 4])
b = MyList()
a.each(lambda x: b.append(x * 2))
print(b) # => [2, 4, 6, 8]
