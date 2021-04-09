---
layout: post
title: "Chapter 1: The Role of Algorithms in Computing"
tag: CLRS
category: posts
order: 1
---
## 1.1 Algorithms

Algorithm: a well-defined **computational procedure** that takes in some value/values and produces some value/values solving a **computational problem**.

### The Sorting Problem

Input: Sequence of n numbers.  
Output: A permutation (reordering) of them.

An input sequence is called the **instance** of the problem. Sorting is a fundamental algorithm and as many other algorithms use it as an intermediate step we have a large number of sorting algorithms at our disposal. 

Sorting algorithms and their time complexities

| Algorithm | Best | Average | Worst |
| --- | --- | --- | --- |
| Selection Sort | O(n^2) | O(n^2) | O(n^2) |
| Bubble Sort | O(n) | O(n^2) | O(n^2) |
| Insertion Sort | O(n) | O(n^2) | O(n^2) |
| Heap Sort | O(n log(n)) | O(n log(n)) | O(n log(n)) |
| Quick Sort | O(n log(n)) | O(n log(n)) | O(n^2) |
| Merge Sort | O(n log(n)) | O(n log(n)) | O(n log(n)) |
| Tim Sort | O(n) | O(n log(n)) | O(n log(n)) |
| Bucket Sort | O(n+k) | O(n+k) | O(n^2) |
| Radix Sort | O(nk) | O(nk) | O(nk) |

The algorithm that needs to be chosen depends upon the number of items to be sorted, the extent to which items are already sorted, restriction on the item values, the architecture of the system, and the storage device used.

An algorithm is **correct** if it halts at the correct output. An incorrect algorithm might not halt on all the input instances or halt with the incorrect input. Incorrect algorithms can be helpful if you can control the **error rate**. 

### Use of Algorithms

1. The Human Genome Project has identified 100,000 genes in human DNA.
2. The Internet enables people to access and retrieve large amounts of information.
3. Public-key cryptography in credit cards, passwords, etc.
4. Manufacturing enterprises need to maximize profits using linear programming.
5. The shortest distance between two points. (irrelevant recollection: convex optimization problems?? Oh, **convex hull** problem). Transporting goods or a routing node on the Internet could need to find the shortest distance.
6. Given two ordered sequences X and Y, need to find the longest common subsequence between the two.
7. Given a mechanical design of parts where each part contains the instance of other parts. List the parts in order so each part occurs before a part that uses it. If the design has n parts then there are n! possible solutions. This is a problem of **topological sorting**.
8. We are given n points and told to find the **convex hull** of these points.
9. Fourier transforms.

### NP-hard Problems

There are NP-complete problems that have no proven efficient solution. NP problems are interesting because even a small change in the question can cause the solution to change completely. Example: [Traveling-salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem) Which states: Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?

### Parallelism

Every year clock speeds were increasing at a steady rate until finally, physical limitations have caused a roadblock to that. Now there's a risk of melting the chip if clock speeds become high enough. To perform better chips were designed to have not just one but several processing cores. This is **parallel computing**. To get the best performance, we need to keep this aspect in mind. This presents us with **multi-threaded algorithms** and has advantages from a theoretical standpoint.

Multi-threaded championship chess program: <http://supertech.lcs.mit.edu/chess/>. I think they are referring to this although I'm not entirely sure. Huff, another thing to read up on.

## Exercises

1.1–1) Give a real-world example that requires sorting or a real-world example that requires computing a convex hull.

A real-world example that requires sorting would be when you’re scrolling through an online shop/hotel booking site and you want the results to be arranged in ascending order by the cost.

A problem that requires a convex hull could be like calculating the nails a rubber band would stretch around for it to have all the nails situated inside it. Or a spatial tracking system of an epidemic <https://www.pnas.org/content/110/11/4239.full>.

Another sorta quirky example is, how far do you stretch out your hand to collect the most amount of fallen rice in one go.

There’s something called [convex relations](https://www.sciencedirect.com/topics/computer-science/convex-relaxation). I might have to look into that.

[Convex Hull explained](https://medium.com/@pascal.sommer.ch/a-gentle-introduction-to-the-convex-hull-problem-62dfcabee90c#:~:text=The convex hull of a,convex on the right side.)

1.1–2) Other than speed, what other measures of efficiency might one use in a real-world setting?

I think this is an excellent question because you know suddenly you’ve been trying to rate all your algorithms based on only a single factor: Big-O Notation. What this question does is shift your notice from that and asks you what else other than Big-O matters?

Other than just how fast a solution is, other factors of efficiency may include the fact whether it successfully passes stress tests correctly, how much memory is used by the system, is the solution stable, is it in-place, and its computational costs.

Algorithm Efficiency: <http://jcsites.juniata.edu/faculty/rhodes/cs2/ch12a.htm>

1.1–3) Select a data structure that you have seen previously, and discuss its strengths and limitations.

Arrays are easier to traverse through except their size is fixed. On the other hand linked lists can change their size dynamically but if they aren’t doubly-linked then traversal through them is hard. Also, if they were made doubly-linked then they occupy more space.

If you were to delete/add an element in an array, you would be required to then shift all the elements after/before it to one place before/after in the array. Such isn’t the case with linked lists.

You cannot easily search an element by its index in a linked list. And reverse traversing problem in a traditional linked list is really hard to implement (fuck, you can implement that. TIL). For those cases, we use a doubly-linked list.

1.1–4) How are the shortest-path and traveling-salesman problems given above similar? How are they different?

Let’s begin by stating both the problems.

- Shortest-path problem: finding a path between two vertices (or nodes) in a graph such that the sum of the weights of its constituent edges is minimized.
- Traveling-salesman problem (or ant colony algorithm): Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?

The similarity is that both these problems are trying to find the shortest path.

The difference is that the shortest path takes you from location X to Y, whereas in the traveling-salesman problem you have to go to all the locations and then return to where you started.

Videos explaining them:

[Dijkstra’s Algorithm](https://youtu.be/GazC3A4OQTE) for the shortest path problems.

[Travelling Salesman Problem](https://youtu.be/zM5MW5NKZJg) (okay, that guy is pretty cute too, so just watch it).

1.1–5) Come up with a real-world problem in which only the best solution will do. Then come up with one in which a solution that is “approximately” the best is good enough.

Maybe it’s something like when you need the fully sorted array you apply quick sort and then get the complete solution. But if you were just to find the kth smallest or largest element of an unsorted array in the sorted array, you partially sort the array using a quick sort implementation so that the array isn’t completely sorted but you get the correct index of the kth element; such that all the values preceding it are smaller than it and all values after are larger.

Yeah, that last example is explained pretty well through [this](https://youtu.be/hGK_5n81drs). Ah, this guy (channel name: Back To Back SWE) is pretty damn good for noobs like me. But then he turned out to be one of those TechLead plebs that need money for their complete online course, sigh. Here lies a toast to Sal Khan.

I just realized this is a coding problem and not exactly the real-world. Let me try again. (or just google it)

Okay without Googling my answer is: Say if you were the invigilator of an exam and you needed to order all of the answer sheets by the roll numbers each one corresponds to. This would require total sorting. But if you were a student and these answer sheets came back sorted, you could approximate the solution to where your paper lies without traversing through even the top part. You’re just taking an educated guess.

(now I’m gonna Google it and face-palm myself)

Best: Find the GCD of two positive integer numbers. 
Approximately: find the solution of differential equations.

Okay, I have no idea why the second one says differential equations.

So this what Wikipedia says: The function is often thought of as an “unknown” to be solved for, similarly to how x is thought of as an unknown number, to be solved for, in an algebraic equation like x² − 3x + 2 = 0. However, it is usually impossible to write down explicit formulas for solutions of partial differential equations. There is, correspondingly, a vast amount of modern mathematical and scientific research on methods to numerically approximate solutions of certain partial differential equations using computers. Partial differential equations also occupy a large sector of pure mathematical research, in which the usual questions are, broadly speaking, on the identification of general qualitative features of solutions of various partial differential equations. [source](https://en.wikipedia.org/wiki/Partial_differential_equation)

So yeah, tomorrow I’m gonna look into this.

<https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0155515>

## 1.2 Algorithms as a Technology

Computers aren't infinitely fast and memory comes at a cost, making them bounded resources. Algorithms help you use resources efficiently.

### Efficiency

The algorithms designed to solve the problem can often have a dramatic effect on the efficiency they solve it with.

### Algorithms and other Technologies

Computer hardware is shown as a **technology** in the above example. System performance depends on choosing algorithms as much as choosing faster hardware. Algorithms are important in:

+ Advanced computer architectures and fabrication technologies
+ Graphical user interfaces
+ Web technologies
+ Fast networking(wired and wireless)

Example: shortest-path algorithm being used in a GPS.

With the ever-increasing capacities of computers, we use algorithms to solve even larger problems and here having efficiency becomes even more important.

## Exercises

1.2-1) Give an example of an application that requires algorithmic content at the application level, and discuss the function of the algorithms involved.

Algorithms in applications:

+ The Reddit karma system probably requires a very complex algorithm.
+ PC games like Yandere Simulator could've used algorithms to make the frame rate faster.
+ When you're carpooling in an Uber, you're going from location X to Y while picking up anyone that comes along in the way. That must actually be a travelling-salesman and shortest-path hybrid problem.
+ Youtube/Spotify recommendation algorithms.
+ Image processing
+ GPT-3 or any form of NLP

1.2-2) Suppose we are comparing implementations of insertion sort and merge sort on the same machine. For inputs of size n, insertion sort runs in 8n^2 steps, while merge sort runs in 64nlgn steps. For which values of n does insertion sort beat merge sort?

**<alert: guide ahead>**

I was like, "do I solve this problem by hand or... make a computer do it for me?". It was definitely gonna be the latter, I am weak as shit at math. You should see what I use the calculator for.

{% highlight c %}
#include <stdio.h>
#include <math.h>

int main() {
	long insertion, merge, i;
	for (i = 2.0; i < 60.0; ++i) {
		insertion = 8.0 * i * i;
		merge = 64.0 * i * log(i);
		printf("n: %ld insertion: %ld merge: %ld\n", i, insertion, merge);

		// no point I can't analyse even analyse the output through my eyes
		// imma gonna put a neat little conditional statement
		// (insertion < merge) ? printf("not valid\n") : break;
		// grand realization: you can't use statements like break in ternary operators
		// you can only use expressions
		// well that's kinda dumb
		// oh well

		int flag = (insertion < merge) ? 1 : 0;
		if (flag == 1)
			printf("Insertion beats Merge: %ld!\n", i);
		else{
			printf("Ah, Merge wins: %ld!\n", i);
			return 0;
		}
	}
}
{% endhighlight %}

The answer is: n = 27. For 27 elements insertion runs: 8n^2 = 5832 steps and merge runs: 64n ln(n) = 5695 steps. Edit: This answer is wrong. 

Something to do with C and python. So anyways, I ran it on python too.
{% highlight python %}
import math

for n in range(2, 100):
  merge = 64 * n * math.log2(n)
  insertion = 8 * n * n
  if merge > insertion:
      print("n: ", n)
      print("merge: ", merge)
      print("insertion: ", insertion)
  else:
      quit()
{% endhighlight %}

The answer is: n = 43. For 43 elements insertion runs: 8n^2 = 14,792 steps and merge runs: 64n ln(n) = 14,933 steps.

1.2-3) What is the smallest value of n such that an algorithm whose running time is 100n^2 runs faster than an algorithm whose running time is 2^n on the same machine?

Now solving this is going to be way more faster. Just need to tweak the code.

The answer is: n = 15. For 15 elements 100n^2 runs: 22500 steps and 2^n runs: 32768 steps.