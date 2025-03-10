---
layout: post
title: Linear Regression
tag: ML
category: posts
order: 1
pagestyle: base
pagestyle2: post
---
## Why

These are the rough notes for the multiple linear regression section in the Neuromatch Academy course. I plan to apply as a mentor, and I don't where else to write --

## Important Base Links

[](https://github.com/NeuromatchAcademy/TA-applications#deep-learning-ta-application-video-instructions)

## Important Topics

Lesson Plan Background

+ Differential calculus
+ The concept of mean-squared error (MSE) and how model parameters (slope) influence the MSE+ Least-squares optimization and Maximum Likelihood Estimation

Tutorial Description

In this set of exercises we will cover the key concepts behind:

+ Gradient descent
+ PyTorch Autograd
+ PyTorch nn module

## Differential Calculus

[](https://www.sydney.edu.au/content/dam/students/documents/mathematics-learning-centre/introduction-to-differential-calculus.pdf)

Velocity describes how the distance changes with time. Velocity is a rate of change. It can be calcualted by the slope (rise/run or distance travelled/time taken) of the time (x-axis) and distance (y-axis) graph.

<p><div class="chartjs-wrapper" style="position: center">
<canvas canvas id="cropYieldChart" class="chartjs" width="undefined" height="undefined"></canvas>
    <script>
        const ctx = document.getElementById('cropYieldChart').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [0, 1, 2, 3, 4],
                datasets: [
                    {
                        label: "Crop Yield",
                        data: [20, 40, 60, 80, 100, 80, 60, 40, 20],
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

## Linear Regression Code

[](https://github.com/psymbio/learning_ml/tree/main/linear_regression)

