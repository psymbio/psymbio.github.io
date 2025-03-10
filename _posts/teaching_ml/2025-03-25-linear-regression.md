---
layout: post
title: Linear Regression
tag: ML
category: posts
order: 1
pagestyle: base
pagestyle2: post
---
These are the rough notes for the multiple linear regression section in the Neuromatch Academy course. I plan to apply as a mentor, and I don't where else to write --

## Important Base Link

[https://github.com/NeuromatchAcademy/TA-applications#deep-learning-ta-application-video-instructions](https://github.com/NeuromatchAcademy/TA-applications#deep-learning-ta-application-video-instructions)

## Important Topics

For this tutorial you can assume that your students have learnt about:

- [ ] Differential Calculus
- [X] The mean-squared error (MSE) and how model parameters (slope) influence the MSE
- [X] Least-squares optimization and Maximum Likelihood Estimation

Tutorial Description

- [ ] Gradient descent
- [ ] PyTorch Autograd
- [ ] PyTorch nn module

Video Outline

- [ ] < 1 min: Introduce yourself. Give a few sentences about who you are!
- [ ] ~ 2 mins: Give a very brief recap of the concept of AutoGrad and explain why it is useful. While you should imagine that you are teaching a class of students, don't feel the need to address them or ask them questions.
- [ ] < 2 mins: Work through the Coding Exercise 2.1: Buiding a Computational Graph explaining the solution code as you go.

Evaluation

We are looking for people who are able to communicate well and who show their knowledge of Python including live coding during. We’re looking for quality over quantity, so don’t feel pressured to rush through everything. Instead, make sure the content you do get to is clear and easy to follow.

## Differential Calculus

[https://www.sydney.edu.au/content/dam/students/documents/mathematics-learning-centre/introduction-to-differential-calculus.pdf](https://www.sydney.edu.au/content/dam/students/documents/mathematics-learning-centre/introduction-to-differential-calculus.pdf)

Velocity describes how the distance changes with time. Velocity is a rate of change. It can be calcualted by the slope (rise/run or distance travelled/time taken) of the time (x-axis) and distance (y-axis) graph.

<p><div class="chartjs-wrapper" style="position: center">
<canvas canvas id="cropYieldChart" class="chartjs" width="undefined" height="undefined"></canvas>
    <script>
        const ctx = document.getElementById('cropYieldChart').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                datasets: [
                    {
                        label: "Crop Yield",
                        data: [20, 35, 50, 65, 70, 65, 50, 35, 20],
                        borderColor: "black",
                        fill: false,
                        tension: 0.1
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Fertilizer Usage (Tonnes)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Crop Yield (Tonnes)'
                        }
                    }
                }
            }
        });
    </script>
</div></p>

Differential calculus is about finding the slope of a tangent to the graph of a function, or equivalently, differential calculus is about finding the rate of change of one quantity with respect to another quantity.

## Mean-Squared Error

For a dataset with $n$ observations, where:

- $y_i$ is the actual value,
- $\hat{y}_i$ is the predicted value,
- $n$ is the number of observations,

the Mean Squared Error is defined as:

$$
MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

- The **difference** $(y_i - \hat{y}_i)$ represents the error for each prediction.
- Squaring the error ensures that negative and positive errors don’t cancel out.
- The **mean** ensures we get the average error over all observations.

### Properties of MSE

- **Always non-negative**: Since we square the errors, MSE is always $\geq 0$.
- **Sensitive to outliers**: Larger errors contribute significantly more to MSE due to squaring.
- **Common in optimization**: MSE is differentiable, making it useful for gradient-based optimization algorithms.

### Alternative Error Metrics

- **Mean Absolute Error (MAE)**: Uses absolute differences instead of squared differences.
  
  $$
  MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|
  $$

- **Root Mean Squared Error (RMSE)**: The square root of MSE, which brings the error back to the original unit.

  $$
  RMSE = \sqrt{MSE}
  $$

MSE is widely used in regression models, including linear regression and neural networks, as a standard performance metric.


## How Model Parameters (Slope) Influence MSE

In a simple linear regression model:

$$
\hat{y} = \beta_1 x + \beta_0
$$

where:
- $\hat{y}$ is the predicted value,
- $\beta_1$ (slope) determines how much $\hat{y}$ changes with $x$,
- $\beta_0$ (intercept) is the value of $\hat{y}$ when $x = 0$.

The **Mean Squared Error (MSE)** is given by:

$$
MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

where $y_i$ are the actual values and $\hat{y}_i$ are the predicted values.

1. **Optimal Slope Minimizes MSE**
   - The best $\beta_1$ minimizes the difference between actual and predicted values.
   - If $\beta_1$ is too low or too high, the predictions deviate significantly, increasing the MSE.
2. **Underfitting (Small $\beta_1$)**
   - A small slope means the model does not capture the relationship between $x$ and $y$ well.
   - Predictions are nearly constant, leading to high bias and large errors.
3. **Overfitting (Large $\beta_1$)**
   - A very high slope can make the model too sensitive to variations in $x$.
   - The model fits noise instead of the underlying trend, leading to poor generalization and increased MSE on new data.
4. **Gradient of MSE with Respect to $\beta_1$**
   - The derivative of MSE with respect to $\beta_1$ helps adjust it using gradient descent:
  $$
  \frac{\partial MSE}{\partial \beta_1} = -\frac{2}{n} \sum_{i=1}^{n} x_i (y_i - \hat{y}_i)
  $$
  - This guides how $\beta_1$ should change to minimize MSE.

The slope ($\beta_1$) directly affects how well the model fits the data. A well-chosen $\beta_1$ results in a lower MSE, while an improper choice can lead to either underfitting or overfitting.

- **Low $\beta_1$ → High MSE due to underfitting**
- **Optimal $\beta_1$ → Low MSE**
- **High $\beta_1$ → High MSE due to overfitting**

## Least-Squares Optimization

Least-squares optimization is a mathematical method used to minimize the difference between predicted values and actual data points in regression models. It is widely used in **linear regression** to find the best-fit line.

Given a dataset with **n** observations:

- $x_i$ : Independent variable (input)
- $y_i$ : Dependent variable (output)
- $\hat{y}_i = \beta_1 x_i + \beta_0$ : Predicted value based on the model

The goal is to find **$\beta_0$ (intercept)** and **$\beta_1$ (slope)** that minimize the total squared error.

The error for each prediction is the **residual**:

$$
e_i = y_i - \hat{y}_i
$$

The **Residual Sum of Squares (RSS)** is given by:

$$
RSS = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

Since we want to minimize this function, we take its derivative with respect to $\beta_0$ and $\beta_1$.

## Linear Regression Code + Derivations of RSS

[https://github.com/psymbio/learning_ml/tree/main/linear_regression](https://github.com/psymbio/learning_ml/tree/main/linear_regression)

- The least-squares method **minimizes the sum of squared errors** to find the best-fit line.
- The solution involves solving for $\beta_0$ and $\beta_1$ by taking derivatives of RSS.
- The derived formula ensures that the estimated line **minimizes** the total squared residuals.

## Maximum Likelihood Estimation (MLE)

Maximum Likelihood Estimation (MLE) is a statistical method used to estimate the parameters of a probability distribution by **maximizing the likelihood function**. It is widely used in machine learning and statistics for parameter estimation.

Given a dataset **$D = \{x_1, x_2, ..., x_n\}$** and a probability distribution with parameters **$\theta$**, the likelihood function is defined as:

$$
L(\theta | D) = P(D | \theta) = \prod_{i=1}^{n} P(x_i | \theta)
$$

### **Goal**: 
Find the parameter **$\theta$** that **maximizes** the likelihood function.

## Log-Likelihood Function

Since products of probabilities can be difficult to compute, we take the **logarithm** of the likelihood function:

$$
\log L(\theta) = \sum_{i=1}^{n} \log P(x_i | \theta)
$$

MLE finds **$\theta$** by solving:

$$
\theta^* = \arg\max_{\theta} \log L(\theta)
$$

## Example: Estimating Mean and Variance for a Normal Distribution

Suppose we have a dataset **$D = \{x_1, x_2, ..., x_n\}$** sampled from a **normal distribution**:

$$
P(x | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}
$$

The likelihood function is:

$$
L(\mu, \sigma^2) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i - \mu)^2}{2\sigma^2}}
$$

Taking the **log-likelihood**:

$$
\log L(\mu, \sigma^2) = -\frac{n}{2} \log (2\pi \sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^{n} (x_i - \mu)^2
$$

To find **$\mu$** and **$\sigma^2$**, we take derivatives:

1. **Estimating $\mu$**:

   $$
   \frac{\partial \log L}{\partial \mu} = \frac{1}{\sigma^2} \sum_{i=1}^{n} (x_i - \mu)
   $$

   Setting this to 0:

   $$
   \mu^* = \frac{1}{n} \sum_{i=1}^{n} x_i = \bar{x}
   $$

   So the **MLE estimate of the mean** is the sample mean.

2. **Estimating $\sigma^2$**:

   $$
   \frac{\partial \log L}{\partial \sigma^2} = -\frac{n}{2\sigma^2} + \frac{1}{2\sigma^4} \sum_{i=1}^{n} (x_i - \mu)^2
   $$

   Solving for $\sigma^2$:

   $$
   \sigma^{2*} = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^2
   $$

   So the **MLE estimate of variance** is the sample variance.

Properties of MLE:

- **Asymptotic Consistency**: As sample size increases, MLE estimates converge to the true parameter values.
- **Efficiency**: MLE achieves the lowest possible variance under certain conditions (Cramér-Rao bound).
- **Bias**: MLE for variance can be slightly biased; an unbiased estimate uses $n-1$ in the denominator.

Summary:

- **MLE finds the parameters** that maximize the likelihood of observing the given data.
- **Log-likelihood simplifies the computation** and avoids numerical issues.
- **For a normal distribution**, MLE estimates the mean as the **sample mean** and variance as the **sample variance**.

MLE is fundamental in **machine learning, Bayesian inference, and statistics**, used in **logistic regression, neural networks, and hidden Markov models**.

