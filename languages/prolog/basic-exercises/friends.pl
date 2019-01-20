likes(wallace, cheese).
likes(grommit, cheese).
likes(wendoline, sheep).

friend(X, Y) :- \+(X = Y), likes(X, Z), likes(Y, Z).
