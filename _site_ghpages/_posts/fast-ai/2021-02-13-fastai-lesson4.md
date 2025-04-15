---
layout: post
title: Fastbook Lesson 4
tag: Fast.ai
category: posts
order: 4
pagestyle: base
pagestyle2: post
---
## Questions

<div class="admonition note"><p class="admonition-title">1. How is a grayscale image represented on a computer? How about a color image?</p><p>Grayscale images have each of their pixels represented in the 256 different shades of gray there can be.<img alt="grayscale" src="/images/2021/fastai/grayscale.jpg" height="50%" width="50%">Here each pixel needs one byte(8 bits) of data to be stored and their value ranges from 0 to 255. When colour is added, things get trickier. More information needs to be stored. Its no more just about what shade. Its about what shade of which "colour". Now to something there's this neat color and heaxadecimal trick. So I bet you know how the three primary colors can represent every other color, this is exactly what we use to represent other colors. If you've developed html websites you've come across something like #FFA079, now split that in three parts FF AO 79 which is basically the hex representation of 255, 160, 121. Choosing from the 256 values of red, green and blue we are able to create 16,777,216 colors.</p></div>
<div class="admonition note"><p class="admonition-title">2. How are the files and folders in the MNIST_SAMPLE dataset structured? Why?</p><p>labels.csv  train/  valid/ where inside train/ and valid/ we have 3/ and 7/. They are divided into training  a validation sets so that the model could be trained and then checked for accuracy of the model. This prevents problems like overfitting.</p></div>
<div class="admonition note"><p class="admonition-title">3. Explain how the "pixel similarity" approach to classifying digits works.</p><p>The pixel similarity approach is something similar similar to a nearest neighbour clustering approach of finding the class of the given number. What we are doing is basically finding the means of all of the pixels of all the pictures in a given in a given class. We then create an ideal version of that class: the mean. Then when we are given a picture to classify we calculate the l1 or l2 norm and see which result is closer to zero. They are basically like calculating the distance between these three points and then classifying the class.</p></div>
<div class="admonition note"><p class="admonition-title">4. What is a list comprehension? Create one now that selects odd numbers from a list and doubles them.</p><p>A list comprehension is the Pythonic way to condense for-loops into a single expession. <div class="inlinecode">list_odd_double = [x*2 for x in original_list if x%2 != 0]</div></p></div>
<div class="admonition note"><p class="admonition-title">5. What is a "rank-3 tensor"?</p><p>A rank-3 tensor is a tensor whose dimensionality is of 3 degrees. A scalar can be represented as a tensor of rank 0 (no index), a vector can be represented as a tensor of rank 1 (one index, e.g., v[i]), a matrix can be represented as a tensor of rank 2 (two indices, e.g., a[i,j]), and a tensor of rank 3 is a cuboid or a “stack of matrices” (three indices, e.g., b[i,j,k]).</p></div>
<div class="admonition note"><p class="admonition-title">6. What is the difference between tensor rank and shape? How do you get the rank from the shape?</p><p>Rank is the number of axis, and shape is the size of each axis. When the size is 6131, 28, 28 the rank is basically just the number of dimensions present which is 3 in this case.</p></div>
<div class="admonition note"><p class="admonition-title">7. What are RMSE and L1 norm?</p><p>RMSE: Root Mean Square Error is basically L2 norm, here we calculate the square of the difference between the values, squares it so none of the values are negative and then finds the mean and performs a sqaure root. L1 norm or Mean Absolute Difference takes the absolute value of all the differences and then find the mean. Intuitively, the difference between L1 and L2 is that the latter will penalize the bigger mistakes more heavily than the former (and be more lenient with smaller  mistakes).</p></div>
<div class="admonition note"><p class="admonition-title">8. How can you apply a calculation on thousands of numbers at once, many thousands of times faster than a Python loop?</p><p>Loops are slow when they run in Python, therefore use libraries like numpy which are based in C and run much faster.</p></div>
<div class="admonition note"><p class="admonition-title">9. Create a 3×3 tensor or array containing the numbers from 1 to 9. Double it. Select the bottom-right four numbers.</p><p><div class="inlinecode">import torch<br>list = [a for a in range(1, 10)]<br>newlist = [list[i: i+3] for i in range(0, len(list), 3)]<br>double = 2 * torch.Tensor(newlist)<br>double[1:, 1:]</div></p></div>
<div class="admonition note"><p class="admonition-title">10. What is broadcasting?</p><p>Broadcasting is a Pythonic concept of how arrays of different dimensions are treated. Like in this case we were given a archetypical mean picture(a.k.a the ideal) and it had a dimension of 28x28 (let's call this a) whereas the stack of all the pictures had a dimension of 1010x28x28 (let's call this b). When we perform a-b it's not supposed be be performed and that's why we broadcast. We say hey, I know you want to perform a-b and unfortunately the dimensions don't match up but say what, take that array a's picture and just make 1010 copies of those, simple. The thing is though PyTorch doesn't really make 1010 copies of one array, it just acts like it has, so what it does instead is that it loops 1010 times through the same 28x28 array. All of this calculation is done in C.</p></div>
<div class="admonition note"><p class="admonition-title">11. Are metrics generally calculated using the training set, or the validation set? Why?</p><p>It is calculated with the validation set to verify that the model hasn't been overfitted on the training set.</p></div>
<div class="admonition note"><p class="admonition-title">12. What is SGD?</p><p>A stochastic gradient descent is an optimization algorithm that updates parameters of a model to minimize the loss function that was evaluated at a previous step. </p></div>
<div class="admonition note"><p class="admonition-title">13. Why does SGD use mini-batches?</p><p>We need to calculate our loss function and gradient on one or more data points. To save on compute time ans space we calculate the average loss for a small subset of the dataset at a time. This subset is called a mini-batch and they are more efficient for GPUs.</p></div>
<div class="admonition note"><p class="admonition-title">14. What are the seven steps in SGD for machine learning?</p><p><ol><li>Initialize the parameters – Random values often work best.</li><li>Calculate the predictions – This is done on the training set, one mini-batch at a time.</li><li>Calculate the loss – The average loss over the minibatch is calculated</li><li>Calculate the gradients – this is an approximation of how the parameters need to change in order to minimize the loss function</li><li>Step the weights – update the parameters based on the calculated weights</li><li>Repeat the process</li><li>Stop – In practice, this is either based on time constraints or usually based on when the training/validation losses and metrics stop improving.</li></ol></p></div>
<div class="admonition note"><p class="admonition-title">15. How do we initialize the weights in a model?</p><p>We initialize them randomly.</p></div>
<div class="admonition note"><p class="admonition-title">16. What is "loss"?</p><p>Measure of how good the model is in the training step. A lower loss function means the model means better predictions.</p></div>
<div class="admonition note"><p class="admonition-title">17. Why can't we always use a high learning rate?</p><p>Really high learning rates doesn't mean the model becomes a fast learner, instead using it may mean that the loss may bounce or diverge as the optimizer takes large steps while updating the prameters much faster than they should be.</p></div>
<div class="admonition note"><p class="admonition-title">18. What is a "gradient"?</p><p>The gradient measures how changing each weight would affect the loss function.</p></div>
<div class="admonition note"><p class="admonition-title">19. Do you need to know how to calculate gradients yourself?</p><p>Not really, but grasp a basic idea of the its working. </p></div>
<div class="admonition note"><p class="admonition-title">20. Why can't we use accuracy as a loss function?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">21. Draw the sigmoid function. What is special about its shape?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">22. What is the difference between a loss function and a metric?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">23. What is the function to calculate new weights using a learning rate?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">24. What does the DataLoader class do?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">25. Write pseudocode showing the basic steps taken in each epoch for SGD.</p><p></p></div>
<div class="admonition note"><p class="admonition-title">26. Create a function that, if passed two arguments [1,2,3,4] and 'abcd', returns [(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd')]. What is special about that output data structure?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">27. What does view do in PyTorch?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">28. What are the "bias" parameters in a neural network? Why do we need them?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">29. What does the @ operator do in Python?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">30. What does the backward method do?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">31. Why do we have to zero the gradients?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">32. What information do we have to pass to Learner?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">33. Show Python or pseudocode for the basic steps of a training loop.</p><p></p></div>
<div class="admonition note"><p class="admonition-title">34. What is "ReLU"? Draw a plot of it for values from -2 to +2.</p><p></p></div>
<div class="admonition note"><p class="admonition-title">35. What is an "activation function"?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">36. What's the difference between F.relu and nn.ReLU?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">37. The universal approximation theorem shows that any function can be approximated as closely as needed using just one nonlinearity. So why do we normally use more?</p><p></p></div>

## Further Research

<div class="admonition hint"><p class="admonition-title">1. Create your own implementation of Learner from scratch, based on the training loop shown in this chapter.</p><p></p></div>
<div class="admonition hint"><p class="admonition-title">2. Complete all the steps in this chapter using the full MNIST datasets (that is, for all digits, not just 3s and 7s). This is a significant project and will take you quite a bit of time to complete! You'll need to do some of your own research to figure out how to overcome some obstacles you'll meet on the way.</p><p></p></div>

fastai: function?
function??
doc(function)

## Extra Links

[All 16,777,216 colors in one picture](https://codegolf.stackexchange.com/questions/22144/images-with-all-colors)

[Differences between L1 and L2 as Loss Function and Regularization](http://www.chioka.in/differences-between-l1-and-l2-as-loss-function-and-regularization/)