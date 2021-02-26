"""
Counts letter occurences in the README.md.

https://spark.apache.org/docs/latest/quick-start.html

Run with:
python example.py
"""

from pyspark.sql import SparkSession

readme = "README.md"

spark = SparkSession.builder.appName("SimpleExample").getOrCreate()
df = spark.read.text(readme).cache()

numAs = df.filter(df.value.contains('a')).count()
numBs = df.filter(df.value.contains('b')).count()

print("Lines with a: %i, lines with b: %i" % (numAs, numBs))

spark.stop()
