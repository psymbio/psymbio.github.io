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

+ Differential Calculus
+ The mean-squared error (MSE) and how model parameters (slope) influence the MSE
+ Least-squares optimization and Maximum Likelihood Estimation
+ Implementing bootstrapping approach to build confidence intervals around the inferred linear model parameters

Tutorial Description

+ Understand multidimensional linear regression;
+ Structure Design Matrix to fit a polynomial regression;
+ Visualize the different polynomial regression models;
+ Evaluate the polynomial regression models.

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

