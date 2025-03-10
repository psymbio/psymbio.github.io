---
layout: post
title: Fastbook Lesson 1
tag: Fast.ai
category: posts
order: 1
pagestyle: base
pagestyle2: post
---
## Questions

<div class="admonition note">
<p class="admonition-title">1. Do you need these for deep learning?</p>
<p>Lots of math: Just highschool math.<br>
Lots of data: No, even 50 samples are enough.<br>
Lots of expensive computers: No.<br>
A PhD: No.</p>
</div>

<div class="admonition note">
<p class="admonition-title">2. Name five areas where deep learning is now the best in the world.</p>
<p>Deep learning plays a mojor role in
<ul>
<li>NLP: answering questions, speech recognition, document summaries and classifications, finding names etc.</li>
<li>Computer Vision: satellite and drone imagery interpretation, face recognition, read traffic signals, convert sudoku pictures to arrays</li>
<li>Medicine: find anomalies in CT scans, a better understanding of the brain</li>
<li>Image Generation: pix2pix convert drawings into images, GANs, colorizing images, increase image resolution</li>
<li>Playing Games: like Atari video games (Super Mario Bros.), Chess, Go, etc.</li>
</ul>
</p>
</div>

<div class="admonition note">
<p class="admonition-title">3. What was the name of the first device that was based on the principle of the artificial neuron?</p>
<p>The first artificial neuron based device was the Mark 1 Perceptron by Frank Rosenblatt.  This machine was designed for image recognition: it had an array of 400 photocells, randomly connected to the "neurons". Weights were encoded in potentiometers, and weight updates during learning were performed by electric motors.</p>
</div>

<div class="admonition note">
<p class="admonition-title">4. Based on the book of the same name, what are the requirements for parallel distributed processing (PDP)?</p>
<p>Parallel distributed processing requires the following:
<div class="mermaid" align="center" height="70%" width="70%">
    flowchart TD
    A["processing units"]-->B["state of activation"]-->C["output function"]-->D["pattern of connectivity"]-->E["propogation rule"]-->F["activation rule"]-->G["learning rate"]-->H["environment"]
</div>
</p>
</div>

<div class="admonition note">
<p class="admonition-title">5. What were the two theoretical misunderstandings that held back the field of neural networks?</p>
<p>Marvin Minsky and Seymour Papert published a book called "Perceptrons", in which they wrote that single layer of such devices was unable to encode simple mathematicla functions like XOR but multiple layers could solve the problem. Only the latter part of this insight was recognized.<br><br>
Another misunderstanding was that the second layer as proposed by Minsky could solve the problem of mathematical models in neural networks but often was to slow and big to be useful in the industry. What they didn't know is to get pratical good performance you need to use even more layers(make them more deep).
</p>
</div>

<div class="admonition tubelight">
<p class="admonition-title">
Read this: <a href="https://www.gse.harvard.edu/news/uk/09/01/education-bat-seven-principles-educators">Education at Bat: Seven Principles for Educators</a>
</p>
<p>Professor David Perkins utilizes his childhood baseball experiences to develop a set of core principles and concepts for teachers.<br><br>
Gives insight into a top down way of teching where rather than building from the ground up, learning the history of say baseball, you instead just play it, make the game worth playing and then work on the hard parts and deliberate practice.</p>
</div>

<div class="admonition tubelight">
<p class="admonition-title">The software stack</p>
<p><div class="mermaid" align="center" height="70%" width="70%">
    flowchart TD
    A["Python"]-->B["PyTorch"]-->C["fastai"]</div>Fastai is built on top of PyTorch. Read: <a href="https://arxiv.org/abs/2002.04688">fastai: A Layered API for Deep Learning</a></p>
</div>

<div class="admonition note">
<p class="admonition-title">6. What is a GPU?</p>
<p>GPU or graphics processing unit was originally designed to accelerate the rendering of 3D graphics. And over time their capabilities were used to perform high performance computing(HPC), deep learning etc. Because GPUs incorporate an extraordinary amount of computational capability, they can deliver incredible acceleration in workloads that take advantage of the highly parallel nature of GPUs, such as image recognition. Many of today’s deep learning technologies rely on GPUs working in conjunction with CPUs.</p>
</div>

<div class="admonition note">
<p class="admonition-title">7. Open a notebook and execute a cell containing: 1+1. What happens?</p>
<p>It prints out 2</p>
</div>

<div class="admonition note">
<p class="admonition-title">8. Follow through each cell of the stripped version of the notebook for this chapter. Before executing each cell, guess what will happen.</p>
<p>Basic Python stuff.</p>
</div>

<div class="admonition note">
<p class="admonition-title">9. Complete the Jupyter Notebook online appendix.</p>
<p>Or read: <a href="https://github.com/fastai/fastbook/blob/master/app_jupyter.ipynb">app_jupyter.ipynb</a> and download PyTorch, fastai, matplotlib and fastbook.</p>
</div>

<div class="admonition note">
<p class="admonition-title">10. Why is it hard to use a traditional computer program to recognize images in a photo?</p>
<p>For traitional computers a task like photo recognition is difficult because of the need of spelling out all the steps in exasperating detail.</p>
</div>

<div class="admonition note">
<p class="admonition-title">11. What did Arthur Samuel mean by "weight assignment"?</p>
<p><div class="mermaid" align="center" height="70%" width="70%">
    flowchart LR
    A["inputs"]-->C{"model"}
    B["weights"]-->C{"model"}
    C{"model"}-->D["results"]</div>
The model of an algorithm is not only based on the input(like the state of the board) but also weights which are some values that get us the best results from the model. Weights are like the strategy.<div class="mermaid" align="center" height="70%" width="70%">
    flowchart LR
    A["inputs"]-->C{"model"}
    B["weights"]-->C{"model"}
    C{"model"}-->D["results"]
    D["results"]-->E["performance"]
    E["performance"]-->|update| B["weights"]</div></p>
</div>

<div class="admonition note">
<p class="admonition-title">12. What term do we normally use in deep learning for what Samuel called "weights"?</p>
<p>We call these parameters.</p></div>

<div class="admonition note">
<p class="admonition-title">13. Draw a picture that summarizes Samuel's view of a machine learning model.</p><p><div class="mermaid" align="center" height="70%" width="70%">
    flowchart LR
    A["inputs"]-->C{"model"}
    B["weights"]-->C{"model"}
    C{"model"}-->D["results"]
    D["results"]-->E["performance"]
    E["performance"]-->|update| B["weights"]</div></p>
</div>

<div class="admonition tubelight">
<p class="admonition-title">Note:</p>
<p><ul>
<li>Architecture: functional form of model.</li>
<li>Weights: are parameters.</li>
<li>Predictions: calculated from independent variables, which is data not including the labels.</li>
<li>Loss: measure of performance. Depends on not only predictions but also correct labels or targets.</li>
</ul><div class="mermaid" align="center" height="70%" width="70%">
    flowchart LR
    A["inputs"]-->C{"architecture"}
    B["parameters"]-->C{"architecture"}
    C{"architecture"}-->D["predictions"]
    D["predictions"]-->E["loss"]
    E["performance"]-->|update| B["parameters"]
    F["labels"]-->E["loss"]</div></p>
</div>

<div class="admonition note">
<p class="admonition-title">14. Why is it hard to understand why a deep learning model makes a particular prediction?</p>
<p>This is a highly-researched topic known as interpretability of deep learning models. Deep learning models are hard to understand in part due to their “deep” nature. Think of a linear regression model. Simply, we have some input variables/data that are multiplied by some weights, giving us an output. We can understand which variables are more important and which are less important based on their weights. A similar logic might apply for a small neural network with 1-3 layers. However, deep neural networks have hundreds, if not thousands, of layers. It is hard to determine which factors are important in determining the final output. The neurons in the network interact with each other, with the outputs of some neurons feeding into other neurons. Altogether, due to the complex nature of deep learning models, it is very difficult to understand why a neural network makes a given prediction.<br><br>However, in some cases, recent research has made it easier to better understand a neural network’s prediction. For example, as shown in this chapter, we can analyze the sets of weights and determine what kind of features activate the neurons. When applying CNNs to images, we can also see which parts of the images highly activate the model. We will see how we can make our models interpretable later in the book.</p>
</div>

<div class="admonition note">
<p class="admonition-title">15. What is the name of the theorem that shows that a neural network can solve any mathematical problem to any level of accuracy?</p>
<p></p>
</div>

<div class="admonition note">
<p class="admonition-title">16. What do you need in order to train a model?</p>
<p>To train a model you need data. It needs patterns to operate on the data. We need not only examples of input data but also labels of that data.</p>
</div>

<div class="admonition note">
<p class="admonition-title">17. How could a feedback loop impact the rollout of a predictive policing model?</p>
<p>Feedback loops would help in predicting the arrests, give information on where to increase policing, then again the feedback from these arrests would go back into the model to re-train it. In this positive feedback loop the more biased the data becomes the more biased is the model.</p>
</div>

<div class="admonition note">
<p class="admonition-title">18. Do we always have to use 224×224-pixel images with the cat recognition model?</p>
<p>It's not necessary to use 224x224 pixel images, however you can make sure that all the images in the dataset are of the same size, smaller than the real images, and usually black and white. This would save a lot on the compue time and space however if these aren't followed as such you can get better results in the model on the cost of compute time and space.</p>
</div>

<div class="admonition note">
<p class="admonition-title">19. What is the difference between classification and regression?</p>
<p>Classification is usually applied to specify the classes that specific data can belong to whereas regression is used to generate a number. Where classification produces mostly discreet results, where regression gives a continuous result.</p>
</div>

<div class="admonition note">
<p class="admonition-title">20. What is a validation set? What is a test set? Why do we need them?</p>
<p>Validation sets help in checking whether or not the model is overfitted. But even then it doesn't ensure the intergrity of the model. To make sure for certain set aside a portion of your dataset as the test set and not let the model see at all, use this to check the performance.</p>
</div>

<div class="admonition note">
<p class="admonition-title">21. What will fastai do if you don't provide a validation set?</p>
<p>If you don't provide a validation set fastai will randomly take 20% of the data.</p>
</div>

<div class="admonition note">
<p class="admonition-title">22. Can we always use a random sample for a validation set? Why or why not?</p>
<p>A good validation or test set should be representative of new data you will see in the future. Sometimes this isn’t true if a random sample is used. For example, for time series data, selecting sets randomly does not make sense. Instead, defining different time periods for the train, validation, and test set is a better approach.</p>
</div>

<div class="admonition note">
<p class="admonition-title">23. What is overfitting? Provide an example.
</p>
<p>Overfitting happens when you train your model for too long with not enough data.<img alt="overfit" src="/images/2021/fastai/overfit.png" height="80%" width="80%">You end up having a function that's too closely fit over a limited set of data points.</p>
</div>

<div class="admonition note">
<p class="admonition-title">24. What is a metric? How does it differ from "loss"?</p>
<p>Metric is the thing you care about whereas loss is how the computer measures its performance to decide how to update parameters. For example if the model were to predict how old something is then, the metric would say how off you were by and this is called the error rate. The loss is how the model gets to know about its performance by adjusting the parameters. Sometimes the metrics won't change if you adjust the parameters that is why we use the loss function.</p>
</div>

<div class="admonition note">
<p class="admonition-title">25. How can pretrained models help?</p>
<p>Yes, using pretrained models helps get a better accuracy, saves on the compute space and time. An example is using a model that is already trained on the ImageNet dataset and using it for a similar task of classifying images, this way you would have a better accuracy as you wouldn't have to teach it stuff it already knows. This model is just updatd by training on additional epochs using the different task's dataset. Like finding books through the ImageNet dataset by transfer learning.</p>
</div>

<div class="admonition tubelight"><p class="admonition-title">Terms:</p><p><img alt="" src="/images/2021/fastai/terms.png"></p></div>

<div class="admonition note">
<p class="admonition-title">26. What is the "head" of a model?</p>
<p></p>
</div>

<div class="admonition tubelight"><p class="admonition-title">Research Paper</p><p>Visualizing and Understanding Convolution Networks by Matt Zeiler and Rob Fergus</p></div>

<div class="admonition note">
<p class="admonition-title">27. What kinds of features do the early layers of a CNN find? How about the later layers?</p>
<p>The early layers of a CNN might be able to first find stuff like basic colors, diagonal lines, gradients etc. in their filters/features. These can be useful not only just for ImageNet but other tasks as well like finding edges etc. Successively these layers combine previous layers and start getting more complex and sophisticated. If by the second layer patterns and textures then recognize dogs and objects in the next layers.</p>
</div>

<div class="admonition note">
<p class="admonition-title">28. Are image models only useful for photos?</p>
<p>No. There's lots of data that can be turned into pictures like that of music/noise by an audio visualization technique and then we can classify different sounds.</p>
</div>

<div class="admonition tubelight"><p class="admonition-title">Learners</p><p>
{% highlight python %}
learner = cnn_learner(dls, resnet34, metrics=error_rate)
{% endhighlight %}
<ul>
<li>dls: data</li>
<li>resnet: architecture for computer vision</li>
<li>34: number of layers</li>
<li>metrics=error_rate: gets printed out at every epoch</li>
<li>epoch: look at every image in the dataset once</li>
<li>error_rate: what is being wrongly classified</li>
<li>accuracy: 1.0 - error rate</li>
</ul>
You need this accuracy measurement to see how the change in parameters affects the changes in the prediction.</p></div>

<div class="admonition tubelight"><p class="admonition-title">Transfer Learning</p><p>
{% highlight python %}
learn.fine_tune(1)
{% endhighlight %}
<ul>
<li>fine_tune: train an existing on your data to make it more accurate.</li>
</ul>
Using a pre-trained model to do a task different from what it was originally meant to do.</p></div>

<div class="admonition note">
<p class="admonition-title">29. What is an "architecture"?</p>
<p>The architecture is the template of the model we are trying to fit. It defines the mathematical model we are trying to fit or are optimizing.</p>
</div>

<div class="admonition note">
<p class="admonition-title">30. What is segmentation?</p>
<p><a href="https://www.v7labs.com/blog/image-segmentation-guide">check this link</a></p>
</div>

<div class="admonition note">
<p class="admonition-title">31. What is y_range used for? When do we need it?</p>
<p>When the problem is of predicting continuous values y_rannge helps us in recognizing a domain in which the values of y must lie in.</p>
</div>

<div class="admonition note">
<p class="admonition-title">32. What are "hyperparameters"?</p>
<p>Parameters that determine how the model is trained, like learning rate, etc. like in the kNN algorithm stated <a href="https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html">here</a> we see that all the parameters listed are actually hyperparameters. To find the best hyperparameters we can perform grid searches as stated <a href="https://scikit-learn.org/stable/modules/grid_search.html">here</a>.</p>
</div>

<div class="admonition note">
<p class="admonition-title">33. What's the best way to avoid failures when using AI in an organization?</p>
<p>Properly define the training, validation and testing datasets. Try simple baseline models first which the model you're working on needs to beat.</p>
</div>

<div class="admonition tubelight"><p class="admonition-title">Find pretrained models:</p><p>Search up model zoos.</p></div>
## Further Research

<div class="admonition hint">
<p class="admonition-title">1. Why is a GPU useful for deep learning? How is a CPU different, and why is it less effective for deep learning?</p>
<p>Initially designed mainly as dedicated graphical rendering workhorses of computer games, GPUs were later enhanced to accelerate other geometric calculations (for instance, transforming polygons or rotating verticals into different coordinate systems like 3D). GPUs are better for deep learning because at the heart of deep learning lies problems relating to matrix and vector operations which GPUs are better at performing.</p>
</div>

<div class="admonition hint">
<p class="admonition-title">2. Try to think of three areas where feedback loops might impact the use of machine learning. See if you can find documented examples of that happening in practice.</p>
<p>While many developers train their AI models on large sets of labeled data and concepts, after a while, adding new, unlabeled inputs to these models can see their performances decline. The solution is a feedback loop. A feedback loop refers to the process by which an AI model’s predicted outputs are reused to train new versions of the model. When we train a computer vision model, we must first feed it a few labeled samples, showing positive and negative examples of the concepts we want it to learn. Afterward, we can then test the model using unlabeled data. By using deep learning and neural networks, the model can then make predictions on whether the desired concept/s is in these unlabeled images. Lastly, each image is given a probability score, with higher scores meaning a higher level of confidence in its predictions. Where a model gives an image a high probability score, it is auto-labeled with the predicted concept. However, in some cases, like for if the model returns a low probability score, this input is sent to a human moderator who verifies, and if necessary corrects, the result. The feedback loop occurs when this labeled data, auto-labeled or human-verified, is fed back to the model as training data.</p>
</div>
