/*
To run the example:
scala Calculator.scala

or to play with the module in the REPL:
> scala
scala> :load Calculator.scala
val args: Array[String] = Array()
Loading Calculator.scala...
object Calculator

scala> Calculator.add(1, 2)
val res0: Int = 3
*/

/** Calculator provides methods for simple mathmatical operations. */
object Calculator {
  def add(a: Int, b: Int): Int =
    a + b

  private def formatAdd(a: Int, b: Int): String = {
    val msg = "%d plus %d equals %d"
    msg.format(a, b, add(a, b))
  }

  def main(args: Array[String]): Unit =
    println(formatAdd(1, 2))
}
