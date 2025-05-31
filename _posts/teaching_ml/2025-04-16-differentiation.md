---
layout: post
title: Differentiation
tag: ML
category: posts
order: 1
pagestyle: base
pagestyle2: post
---

For any function, what we fundamentally want to understand is: if the input changes by an infinitesimally small amount, how does the output of the function respond?

Before we dive into the idea of differentiation, it's helpful to first understand two key concepts: what a function is, and what we mean by the slope of a line.

1. A **function** is a rule that takes an input and gives exactly one output. For example, if we have a function $f(x) = x^2$, then inputting $x = 2$ gives us the output $f(2) = 4$. Every valid input $x$ is mapped to a corresponding output $f(x)$.
2. The **slope** measures how steep a line is — it tells us how much the value of $y$ changes for a given change in $x$. For two points on a line, say $(x_1, y_1)$ and $(x_2, y_2)$, the slope is given by: $\text{slope} = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{rise}}{\text{run}}$

Now let's start to look into the definition of a derivative through an illustration:

<center>
{% tikz derivative-parabola-fixed %}
\pgfplotsset{
    soldot/.style={color=black,only marks,mark=*},
    opendot/.style={color=black,fill=white,only marks,mark=*},
    compat=1.12
}
\begin{axis}[
    axis lines=middle,
    grid=both,
    xlabel=\(x\),
    ylabel=\(y\),
    xmin=-1.5, xmax=4.5,
    ymin=-2, ymax=5,
    xtick=\empty,
    ytick=\empty,
    samples=200,
    width=10cm,
    height=8cm,
    domain=-0.5:4.5,
    ticklabel style={fill=white},
]
    % Parabola (passes through P)
    \addplot[blue, thick, smooth] {0.5*(x-1)^2 + 2};

    % Points P and Q
    \addplot[soldot] coordinates{(1,2)} node[below left] {P};
    \addplot[soldot] coordinates{(3,4)} node[above right] {Q};

    % Secant line PQ
    \addplot[dashed, domain=0.5:3.5] {1*(x-1)+2};

    % Dotted lines to axes from P and Q
    \draw[dashed] (axis cs:1,0) -- (axis cs:1,2);
    \draw[dashed] (axis cs:0,2) -- (axis cs:1,2);
    \draw[dashed] (axis cs:3,0) -- (axis cs:3,4);
    \draw[dashed] (axis cs:0,4) -- (axis cs:3,4);

    % Labels
    \node at (axis cs:1,-0.4) {\(x\)};
    \node at (axis cs:3,-0.4) {\(x+\Delta x\)};
    \node at (axis cs:-0.4,2) {\(f(x)\)};
    \node at (axis cs:-0.7,4) {\(f(x+\Delta x)\)};
    \node at (axis cs:2,-0.8) {\(\Delta x\)};
\end{axis}
{% endtikz %}
</center>

Using the illustration, we can understand how the function changes when its input changes by a small amount $\Delta x$. To do this, we calculate the slope of the line passing through two points on the function: $P = (x, f(x))$ and $Q = (x + \Delta x, f(x + \Delta x))$. This line is called the **secant line**, and its slope is given by:

$$
\frac{f(x + \Delta x) - f(x)}{(x + \Delta x) - x} = \frac{f(x + \Delta x) - f(x)}{\Delta x}.
$$

This slope represents the **average rate of change** of the function between the two points.

To find the **instantaneous rate of change** at the point $x$, we bring point $Q$ closer and closer to point $P$ by letting $\Delta x$ approach zero. As this happens, the secant line approaches the **tangent line** at $x$, and its slope becomes the **derivative** of the function at that point:

$$
f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}.
$$

This limit, if it exists, tells us how the function responds to an infinitesimally small change in the input. A function $f(x)$ is said to be **differentiable** at a point $x$ if this limit exists and yields a finite value. In other words, the function must be smooth (no sharp corners or breaks) in an open interval around $x$.

Now, given we know that one fundamental formulae, yopu are supposed to like whiz through the sections below - you can occasionally take a pen and paper to solve it for yourself - but otherwise just accept it and move on.

## Constant Rule

If $f(x) = c$, where $c$ is a constant, then the output of the function is the same for every input $x$. That is, no matter how $x$ changes, $f(x)$ remains unchanged. This means the rate of change, or the slope of the function, is zero at all points:

$$
f'(x) = \frac{d}{dx}(c) = 0
$$

Using the definition of the derivative:

$$
f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}
$$

Since the function always outputs the same value $c$, we have:

$$
f(x + \Delta x) = c \quad \text{and} \quad f(x) = c
$$

So the difference in output is:

$$
\frac{c - c}{\Delta x} = \frac{0}{\Delta x} = 0
$$

Therefore:

$$
f'(x) = \lim_{\Delta x \to 0} 0 = 0
$$

A constant function has no change, and hence its derivative is zero everywhere.


## Sum Rule

$$(a \cdot f(x) + b \cdot g(x))' = \frac{d}{dx} (a \cdot f(x) + b \cdot g(x))$$

then using,

$$f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}$$

we have:

$$
\begin{aligned}
&= \lim_{h \to 0} \frac{a \cdot f(x + h) + b \cdot g(x + h) - (a \cdot f(x) + b \cdot g(x))}{h} \\
&= a \cdot \frac{f(x+h) - f(x)}{h} + b \cdot \frac{g(x+h) - g(x)}{h} \\
&= a \cdot f'(x) + b \cdot g'(x)
\end{aligned}
$$

## Product Rule

If $f(x)$ and $g(x)$ are both differentiable functions, then the derivative of their product is:

$$
\frac{d}{dx} \left[ f(x) \cdot g(x) \right] = f'(x) \cdot g(x) + f(x) \cdot g'(x)
$$


We start with the definition of the derivative:

$$
\frac{d}{dx} \left[ f(x) \cdot g(x) \right] = \lim_{\Delta x \to 0} \frac{f(x + \Delta x)g(x + \Delta x) - f(x)g(x)}{\Delta x}
$$

We add and subtract a middle term $f(x + \Delta x)g(x)$ to split the expression:

$$
= \lim_{\Delta x \to 0} \frac{f(x + \Delta x)g(x + \Delta x) - f(x + \Delta x)g(x) + f(x + \Delta x)g(x) - f(x)g(x)}{\Delta x}
$$

Group the terms:

$$
= \lim_{\Delta x \to 0} \left[ \frac{f(x + \Delta x)\left(g(x + \Delta x) - g(x)\right)}{\Delta x} + \frac{g(x)\left(f(x + \Delta x) - f(x)\right)}{\Delta x} \right]
$$

Take the limit of each part:

$$
= f(x) \cdot \lim_{\Delta x \to 0} \frac{g(x + \Delta x) - g(x)}{\Delta x} + g(x) \cdot \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}
$$

Which simplifies to:

$$
f(x) \cdot g'(x) + g(x) \cdot f'(x)
$$

So,

$$
\frac{d}{dx} \left[ f(x) \cdot g(x) \right] = f'(x)g(x) + f(x)g'(x)
$$

## Chain Rule

If $y = f(g(x))$, where both $f$ and $g$ are differentiable functions, then the derivative of the composition is:

$$
\frac{dy}{dx} = f'(g(x)) \cdot g'(x)
$$

Let’s consider the function $y = f(g(x))$. To find $\frac{dy}{dx}$, we start with the definition of the derivative:

$$
\frac{dy}{dx} = \lim_{\Delta x \to 0} \frac{f(g(x + \Delta x)) - f(g(x))}{\Delta x}
$$

Let $\Delta g = g(x + \Delta x) - g(x)$. Since $g$ is differentiable at $x$, as $\Delta x \to 0$, we also have $\Delta g \to 0$.

We now rewrite the difference quotient as:

$$
\frac{f(g(x + \Delta x)) - f(g(x))}{\Delta x} = \frac{f(g(x) + \Delta g) - f(g(x))}{\Delta g} \cdot \frac{\Delta g}{\Delta x}
$$

Take the limit of both parts:

$$
\lim_{\Delta x \to 0} \left[ \frac{f(g(x) + \Delta g) - f(g(x))}{\Delta g} \cdot \frac{\Delta g}{\Delta x} \right]
$$

As $\Delta g \to 0$, the first term becomes $f'(g(x))$, and the second becomes $g'(x)$. So:

$$
\frac{dy}{dx} = f'(g(x)) \cdot g'(x)
$$

## Summary

1. Constant Rule:
$$
\frac{d}{dx}[c] = 0
$$

2. Sum Rule:
$$
\frac{d}{dx}[a \cdot f(x) + b \cdot g(x)] = a \cdot f'(x) + b \cdot g'(x)
$$

3. Product Rule:
$$
\frac{d}{dx}[f(x) \cdot g(x)] = f(x) \cdot g'(x) + f'(x) \cdot g(x)
$$

4. Quotient Rule:
$$
\frac{d}{dx} \left[\frac{f(x)}{g(x)}\right] = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2}
$$

5. Chain Rule:
$$
\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)
$$

## Let the complication begin!

Okay, so now that we've formed a basis for like the normal-ass differentiation we cna start to tackle the really complicated. If you've like taken an introductory differentiation course or something, depending on the country of your orgin - you might have been given a list to memorize - mostly I think the concern behind that was that you not in a million years would be able to derive eveyrthing from scratch in the 3 hours stipulated for the exam that decides your life so - 

## Derivative of $\cos(x)$

We want to compute the derivative of $f(x) = \cos(x)$. By definition, the derivative is:

$$
f'(x) = \lim_{\Delta x \to 0} \frac{\cos(x + \Delta x) - \cos(x)}{\Delta x}
$$

Now apply the trigonometric identity for $\cos(A + B)$:

$$
\cos(x + \Delta x) = \cos(x)\cos(\Delta x) - \sin(x)\sin(\Delta x)
$$

Substitute this into the limit:

$$
f'(x) = \lim_{\Delta x \to 0} \frac{\cos(x)\cos(\Delta x) - \sin(x)\sin(\Delta x) - \cos(x)}{\Delta x}
$$

Group terms:

$$
= \lim_{\Delta x \to 0} \left[ \cos(x) \cdot \frac{\cos(\Delta x) - 1}{\Delta x} - \sin(x) \cdot \frac{\sin(\Delta x)}{\Delta x} \right]
$$

Now use the standard limits:

$$
\lim_{\Delta x \to 0} \frac{\cos(\Delta x) - 1}{\Delta x} = 0, \quad \lim_{\Delta x \to 0} \frac{\sin(\Delta x)}{\Delta x} = 1
$$

(the quick explanation for $\lim_{\Delta x \to 0} \frac{\sin(\Delta x)}{\Delta x} = 1$ is that $\sin(0) = 0$, so $\sin(\Delta x)$ is not exactly $0$ but like somewhere near it, and so we say $\sin(\Delta x) = \Delta x$, and $ \lim_{\Delta x \to 0} \frac{\Delta x}{\Delta x} = 1$)

So we get:

$$
f'(x) = \cos(x) \cdot 0 - \sin(x) \cdot 1 = -\sin(x)
$$

Therefore:

$$
\frac{d}{dx}[\cos(x)] = -\sin(x)
$$


## References

1. [Limit Definition and Illustration](https://math.hmc.edu/calculus/hmc-mathematics-calculus-online-tutorials/single-variable-calculus/limit-definition-of-the-derivative/)
2. [Backpropagation Through Time](https://d2l.ai/chapter_recurrent-neural-networks/bptt.html)
3. [Unrelated read on ODEs and euler](https://math.libretexts.org/Workbench/Numerical_Methods_with_Applications_(Kaw)/8%3A_Ordinary_Differential_Equations/8.02%3A_Euler%E2%80%99s_Method_for_Solving_Ordinary_Differential_Equations)
4. [Unrelated read on Topological sorting - this is used in both micrograd and DNAs](https://www3.cs.stonybrook.edu/~algorith/video-lectures/1997/lecture16.pdf)