/*
Examples from "Functional Programming in Scala"
*/

/** Calculator provides methods for simple mathmatical operations. */
object Calculator {
  def factorial(n: Int): Int = {
    @annotation.tailrec // tells compiler to return an error if tail recursion isn't possible
    def go(n: Int, acc: Int): Int =
      if (n < 1) acc
      else go(n - 1, n*acc)

    go(n, 1)
  }

  def formatFactorial(n: Int) =
    "The facorial of %d is %d".format(n, factorial(n))

  def main(args: Array[String]): Unit = {
    println(formatFactorial(5))
  }
}
