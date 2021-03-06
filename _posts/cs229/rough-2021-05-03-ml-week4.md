---
layout: post
title: "Lecture 4: Perceptron & Generalized Linear Model"
tag: CS229
category: posts
order: 3
pagestyle: base
pagestyle2: post
---
Sigmoid function
<iframe src="https://www.desmos.com/calculator/jsy08qm97c" width="100%" style="min-height:400px"></iframe>

<figure>
<img alt="regression" src="/images/2021/cs229/activationfunction.jpg" height="100%" width="100%">
<figcaption align="center">Various activation functions that can be used with Perceptron are shown here.</figcaption>
</figure>

The perceptron function we are concerned with is: Signum.

<iframe src="https://www.desmos.com/calculator/z5ztszs7tk" width="100%" style="min-height:400px"></iframe>

In a way a signum function is a hard-version of the sigmoid.

Now the hypothesis function of the signum function is $$h_\theta(x) = g(\theta^{T} x)$$ where $$\theta$$ is the parameter and $$x$$ is the input.

The hypothesis function of the sigmoid function is $$h_\theta(x) = 1 / (1 + e^{-\theta^{T}x})$$.

They have an update rule which looks the same: $$\theta_j = \theta_j + \alpha (y^{(i)} - h_\theta(x)^{(i)}) (x_j)^{(i)}$$ except $$h_\theta(x)^{(i)}$$ mean different in both of them. It's also same in linear regression as well.

Now $$y^{(i)} - h_\theta(x)^{(i)}$$ can have a value of:
+ 0 if the prediction is correct.
+ +1 if $$y^{(i)}$$ is 1, the prediction is wrong.
+ -1 if $$y^{(i)}$$ is 0, the prediction is wrong.

[8:00]

perceptron Marvin Minsky paper

[14:00]

## Exponential Families

/*didn't understand a single thing*/
