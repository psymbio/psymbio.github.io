---
layout: post
title: Micrograd
tag: ML
category: posts
order: 1
pagestyle: base
pagestyle2: post
---

## Micrograd Overview

```python
from micrograd.engine import Value

a = Value(-4.0)
b = Value(2.0)
c = a + b
d = a * b + b**3
c += c + 1
c += 1 + c + (-a)
d += d * 2 + (b + a).relu()
d += 3 * d + (b - a).relu()
e = c - d
f = e**2
g = f / 2.0
g += 10.0 / f
print(f'{g.data:.4f}') # prints 24.7041, the outcome of this forward pass
g.backward()
print(f'{a.grad:.4f}') # prints 138.8338, i.e. the numerical value of dg/da
print(f'{b.grad:.4f}') # prints 645.5773, i.e. the numerical value of dg/db
```

We want to create a library to make a graph of all these calculations so that we can compute things like the change in the value of $g$ with a slight change in the value of $a$ in this particular case shown in `print(f'{a.grad:.4f}')`.

This version of micrograd is predominantly for pedagogical reasons - where these operations would be done on tensors - here we work with integers.

The code is very simple: [Code Repo](https://github.com/karpathy/micrograd)

Micrograd is all you need for neural networks and the rest is just efficiency.

Okay so basically after this point I just went through the video and noted like everything Kaparthy says in Jupyter Notebooks(-s) (extremely long ones at that but basically the entire idea of a neural network and like backprop starts to make sense for a newbie after that entire exercise, if you are like starting out I think the two people in the area of making sense is Kaparthy and Andrew Ng - it's like they live inside networks or something). 

[Link to the notebooks](https://github.com/psymbio/learning_ml/tree/main/micrograd)

[Link to the video](https://www.youtube.com/watch?v=VMj-3S1tku0&ab_channel=AndrejKarpathy)
