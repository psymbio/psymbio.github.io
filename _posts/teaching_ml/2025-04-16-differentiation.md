---
layout: post
title: Differentiation
tag: ML
category: posts
order: 1
pagestyle: base
pagestyle2: post
---

It all starts from this one simple formula:

A function of a real variable $f(x)$ is differentiable at a point $a$ of its domain, if its domain contains an open interval containing $a$, and the limit

$$L=\lim_{h \to 0}\frac{f(a+h)-f(a)}{h}$$

This is really the only formula we need for all of differentiation and here's how you want to understand it: 

Think of $h$ as a small step away from $a$. The quantity $\frac{f(a+h) - f(a)}{h}$ is the slope of the secant line connecting the points $(a, f(a))$ and $(a+h, f(a+h))$. As $h$ gets closer and closer to $0$, the secant line approaches the tangent line to the curve at $x = a$, and its slope becomes the derivative $f'(a)$, i.e., how does the function change with a small change $h$. 

<center>
{% tikz removeable-discontinuity %}
    \pgfplotsset{soldot/.style={color=blue,only marks,mark=*},
             holdot/.style={color=black,fill=white,only marks,mark=*},
             compat=1.12}
    \begin{axis}[   grid=both,
                    axis lines=middle,
                    ticklabel style={fill=white},
                    xmin=-1,xmax=6,
                    ymin=-2,ymax=5,
                    xtick={1, 2, 3, 4, 5},
                    ytick={-1, 1, 2, 3, 4},
                    xlabel=\(x\),ylabel=\(y\),
                    samples=200
                ]
        \addplot[domain=0.23:6, blue, thick] {0.1*(x*x*x - 10*x*x + 37*x - 28)};
        \addplot[holdot] coordinates{(3, 2)};
        \addplot[soldot] coordinates{(3, 3)};
    \end{axis}
{% endtikz %}
</center>