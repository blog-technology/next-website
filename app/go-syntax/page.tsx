export default function Page() {
  return (
    <article>
<h1>GO Syntax</h1>
<h3>Basic GO</h3>
<ul>
<li>To learn the basic syntax, you can start at <a href="https://go.dev/tour">https://go.dev/tour</a></li>
<li><b>View</b> online training slide at <a href="https://www.slideshare.net/MinhDucNguyen74/go-tutorial-251383541">here</a></li>
<li><b>Download</b> training slide at <a href="https://github.com/go-tutorials/overview/blob/main/go-tutorial.pptx">here</a></li>
</ul>
<h4>Hello world</h4>
<ul>
<li>Every Go program is made up of packages</li>
<li>Start running in package main<ul>
<li>Run here <a href="https://go.dev/tour/welcome/1">https://go.dev/tour/welcome/1</a></li>
<li>In this sample, use “fmt” package to print a string to console</li>
</ul>
</li>
</ul>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

func main() {
    fmt.Println("Hello, world")
}`}</code></pre><h4>Function</h4>
<p>Support to return multiple values</p>
<ul>
<li>Exercise 1: write a function, to add 2 integer numbers<ul>
<li>Run here <a href="https://go.dev/tour/basics/5">https://go.dev/tour/basics/5</a></li>
</ul>
</li>
<li>Exercise 2: write a function, to swap 2 strings<ul>
<li>Run here <a href="https://go.dev/tour/basics/6">https://go.dev/tour/basics/6</a></li>
</ul>
</li>
</ul>
<table><thead><tr><td>
<p><a href="https://go.dev/tour/basics/5">Return 1 value</a></p>
</td><td>
<p><a href="https://go.dev/tour/basics/6">Return 2 values</a></p>
</td></tr></thead><tbody><tr><td>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

func add(x, y int) int {
  return x + y
}

func main() {
  fmt.Println(add(42, 13))
}`}</code></pre></td>
<td>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

func swap(x, y string) (string, string) {
  return y, x
}

func main() {
  a, b := swap("hello", "world")
  fmt.Println(a, b)
}`}</code></pre></td></tr></tbody></table>
<h4>Variables</h4>
<p>Declare variables</p>
<ul>
<li>Exercise 1: Use “var” to declare 3 variables<ul>
<li>Run here <a href="https://go.dev/tour/basics/8">https://go.dev/tour/basics/8</a></li>
</ul>
</li>
<li>Exercise 2: Use short variables declarations<ul>
<li>Run here <a href="https://go.dev/tour/basics/10">https://go.dev/tour/basics/10</a></li>
</ul>
</li>
</ul>
<table><thead><tr><td>
<p><a href="https://go.dev/tour/basics/8">Use var</a></p>
</td><td>
<p><a href="https://go.dev/tour/basics/10">Use short variables declarations</a></p>
</td></tr></thead><tbody><tr><td>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

var c, python, java bool

func main() {
  var i int
  fmt.Println(i, c, python, java)
}`}</code></pre></td>
<td>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

func main() {
  var i, j int = 1, 2
  k := 3
  c, python, java := true, false, "no!"

  fmt.Println(i, j, k, c, python, java)
}`}</code></pre></td></tr></tbody></table>
<h4>Convert type</h4>
<ul>
<li>Use expression T(v) to convert some number<ul>
<li>Run here <a href="https://go.dev/tour/basics/13">https://go.dev/tour/basics/13</a></li>
</ul>
</li>
</ul>
<pre className="line-numbers"><code className="language-go">{`package main

import (
    "fmt"
    "math"
)

func main() {
    var x, y int = 3, 4
    var f float64 = math.Sqrt(float64(x*x + y*y))
    var z uint = uint(f)
    fmt.Println(x, y, z)
}`}</code></pre><h4>Loop</h4>
<p>Declare variables</p>
<ul>
<li>Exercise 1: Total from 1 to 10<ul>
<li>Run here <a href="https://go.dev/tour/flowcontrol/1">https://go.dev/tour/flowcontrol/1</a></li>
</ul>
</li>
<li>Exercise 2: Total from 1 to 10, with &quot;while&quot; loop logic<ul>
<li>Run here <a href="https://go.dev/tour/flowcontrol/3">https://go.dev/tour/flowcontrol/3</a></li>
</ul>
</li>
</ul>
<table><thead><tr><td>
<p><a href="https://go.dev/tour/flowcontrol/1">For loop</a></p>
</td><td>
<p><a href="https://go.dev/tour/flowcontrol/3">while is spelled for in Go</a></p>
</td></tr></thead><tbody><tr><td>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

func main() {
  sum := 0
  for i := 0; i < 10; i++ {
    sum += i
  }
  fmt.Println(sum)
}`}</code></pre></td>
<td>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

func main() {
  sum := 1
  for sum < 1000 {
    sum += sum
  }
  fmt.Println(sum)
}`}</code></pre></td></tr></tbody></table>
<h4>Defer</h4>
<p>A defer statement defers the execution of a function until the surrounding function return</p>
<ul>
<li>Exercise: Print “hello world” with defer<ul>
<li>Run here <a href="https://go.dev/tour/flowcontrol/12">https://go.dev/tour/flowcontrol/12</a></li>
</ul>
</li>
</ul>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

func main() {
    defer fmt.Println("world")

    fmt.Println("hello")
}`}</code></pre><h4>Pointer</h4>
<p>Struct fields can be accessed through a struct pointer</p>
<ul>
<li>Exercise: Access a struct with a struct pointer<ul>
<li>Run here <a href="https://go.dev/tour/moretypes/4">https://go.dev/tour/moretypes/4</a></li>
</ul>
</li>
</ul>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

type Vertex struct {
    X int
    Y int
}

func main() {
    v := Vertex{1, 2}
    p := &v
    p.X = 1e9
    fmt.Println(v)
}`}</code></pre><h4>Array</h4>
<p>Arrays cannot be resized</p>
<ul>
<li>Exercise: Create arrays with string &amp; int<ul>
<li>Run here <a href="https://go.dev/tour/moretypes/6">https://go.dev/tour/moretypes/6</a></li>
</ul>
</li>
</ul>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

func main() {
    var a [2]string
    a[0] = "Hello"
    a[1] = "World"
    fmt.Println(a[0], a[1])
    fmt.Println(a)

    primes := [6]int{2, 3, 5, 7, 11, 13}
    fmt.Println(primes)
}`}</code></pre><h4>Slice</h4>
<p>A dynamically-sized</p>
<ul>
<li>Exercise 1: Create a slice from an array<ul>
<li>Run here <a href="https://go.dev/tour/moretypes/7">https://go.dev/tour/moretypes/7</a></li>
</ul>
</li>
<li>Exercise 2: Create a slice from an array<ul>
<li>Run here <a href="https://go.dev/tour/moretypes/13">https://go.dev/tour/moretypes/13</a></li>
</ul>
</li>
</ul>
<table><thead><tr><td>
<p><a href="https://go.dev/tour/moretypes/7">Print 1 slice</a></p>
</td><td>
<p><a href="https://go.dev/tour/moretypes/13">Print 4 slices</a></p>
</td></tr></thead><tbody><tr><td>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

func main() {
  primes := [6]int{2, 3, 5, 7, 11, 13}

  var s []int = primes[1:4]
  fmt.Println(s, primes)
}`}</code></pre></td>
<td>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

func main() {
  a := make([]int, 5)
  printSlice("a", a)

  b := make([]int, 0, 5)
  printSlice("b", b)

  c := b[:2]
  printSlice("c", c)

  d := c[2:5]
  printSlice("d", d)
}

func printSlice(s string, x []int) {
  fmt.Printf("%s len=%d cap=%d %v\n",
    s, len(x), cap(x), x)
}`}</code></pre></td></tr></tbody></table>
<h4>Range</h4>
<p>The range form of the for loop iterates over a slice or map</p>
<ul>
<li>Exercise: Loop a slice and print 2 powers<ul>
<li>Run here <a href="https://go.dev/tour/moretypes/16">https://go.dev/tour/moretypes/16</a></li>
</ul>
</li>
</ul>
<pre className="line-numbers"><code className="language-go">{`package main

import "fmt"

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
    for i, v := range pow {
        fmt.Printf("2**%d = %d\n", i, v)
    }
}`}</code></pre><h4>Method</h4>
<p>Method is a function of struct</p>
<ul>
<li>Exercise: Create a method, with struct receiver<ul>
<li>Run here <a href="https://go.dev/tour/methods/1">https://go.dev/tour/methods/1</a></li>
</ul>
</li>
</ul>
<pre className="line-numbers"><code className="language-go">{`package main

import (
    "fmt"
    "math"
)

type Vertex struct {
    X, Y float64
}

func (v Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
    v := Vertex{3, 4}
    fmt.Println(v.Abs())
}`}</code></pre><h4>Interface</h4>
<p>An interface type is defined as a set of method signatures</p>
<ul>
<li>Exercise: Create a method, with struct receiver<ul>
<li>Run here <a href="https://go.dev/tour/methods/9">https://go.dev/tour/methods/9</a></li>
</ul>
</li>
</ul>
<pre className="line-numbers"><code className="language-go">{`package main

import (
    "fmt"
    "math"
)

type Abser interface {
    Abs() float64
}

func main() {
    var a Abser
    f := MyFloat(-math.Sqrt2)
    v := Vertex{3, 4}

    a = f    // a MyFloat implements Abser
    a = &v // a *Vertex implements Abser

    // In the following line, v is a Vertex (not *Vertex)
    // and does NOT implement Abser.
    a = v

    fmt.Println(a.Abs())
}

type MyFloat float64

func (f MyFloat) Abs() float64 {
    if f < 0 {
        return float64(-f)
    }
    return float64(f)
}

type Vertex struct {
    X, Y float64
}

func (v *Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}`}</code></pre></article>
  )
}