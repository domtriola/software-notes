# Apache Spark

An analytics engine for data processing.

Spark uses a directed acyclic graph (DAG) engine to run jobs fast (100x faster than Hadoop with map reduce).

## Install

* Local install: `brew install apache-spark`
  * Note: all commands will be found at the install location: e.g. `ls /usr/local/Cellar/apache-spark/3.0.2/bin/`
* Install PySpark: `pip install pyspark`

## Components

### Spark Core

* Foundational component
* Task distribution
* Scheduling
* Input/Output

### Spark SQL

* Makes Spark compatible with SQL queries and tools
* Uses DataFrames

### Spark Streaming

* For stream-like analytics
* Micro batches
* Lambda architecture

### MLlib

* Machine learning

### GraphX

* Graph processing
* In-memory version of Apache Giraph
* Based on dataframes, so not a true graph implementation

### SparkR

* R package for Spark
