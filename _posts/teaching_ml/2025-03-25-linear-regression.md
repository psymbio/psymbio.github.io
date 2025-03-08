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

https://github.com/NeuromatchAcademy/TA-applications#deep-learning-ta-application-video-instructions

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

https://www.sydney.edu.au/content/dam/students/documents/mathematics-learning-centre/introduction-to-differential-calculus.pdf

Velocity describes how the distance changes with time. Velocity is a rate of change. It can be calcualted by the slope (rise/run or distance travelled/time taken) of the time (x-axis) and distance (y-axis) graph.

<p>
<canvas id="cropYieldChart"></canvas>
    <script>
        const ctx = document.getElementById('cropYieldChart').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [0, 1, 2, 3, 4],
                datasets: [
                    {
                        label: "Crop Yield",
                        data: [50, 100, 160, 120, 40], // Approximate parabola data
                        borderColor: "black",
                        fill: false,
                        tension: 0.1
                    },
                    {
                        label: "Slope 50",
                        data: [50, 100, 150], // Approximate tangent line
                        borderColor: "blue",
                        borderDash: [5, 5],
                        fill: false
                    },
                    {
                        label: "Slope 25",
                        data: [160, 185, 210], // Approximate tangent line
                        borderColor: "red",
                        borderDash: [5, 5],
                        fill: false
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
<p>