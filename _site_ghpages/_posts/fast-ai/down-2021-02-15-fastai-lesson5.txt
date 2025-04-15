---
layout: post
title: Fastbook Lesson 5
tag: Fast.ai
category: posts
order: 5
---
## Questions

<div class="admonition note"><p class="admonition-title">1. Why do we first resize to a large size on the CPU, and then to a smaller size on the GPU?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">2. If you are not familiar with regular expressions, find a regular expression tutorial, and some problem sets, and complete them. Have a look on the book's website for suggestions.</p><p></p></div>
<div class="admonition note"><p class="admonition-title">3. What are the two ways in which data is most commonly provided, for most deep learning datasets?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">4. Look up the documentation for L and try using a few of the new methods that it adds.</p><p></p></div>
<div class="admonition note"><p class="admonition-title">5. Look up the documentation for the Python pathlib module and try using a few methods of the Path class.</p><p></p></div>
<div class="admonition note"><p class="admonition-title">6. Give two examples of ways that image transformations can degrade the quality of the data.</p><p></p></div>
<div class="admonition note"><p class="admonition-title">7. What method does fastai provide to view the data in a DataLoaders?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">8. What method does fastai provide to help you debug a DataBlock?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">9. Should you hold off on training a model until you have thoroughly cleaned your data?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">10. What are the two pieces that are combined into cross-entropy loss in PyTorch?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">11. What are the two properties of activations that softmax ensures? Why is this important?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">12. When might you want your activations to not have these two properties?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">13. Calculate the exp and softmax columns of <> yourself (i.e., in a spreadsheet, with a calculator, or in a notebook).</p><p></p></div>
<div class="admonition note"><p class="admonition-title">14. Why can't we use torch.where to create a loss function for datasets where our label can have more than two categories?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">15. What is the value of log(-2)? Why?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">16. What are two good rules of thumb for picking a learning rate from the learning rate finder?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">17. What two steps does the fine_tune method do?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">18. In Jupyter Notebook, how do you get the source code for a method or function?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">19. What are discriminative learning rates?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">20. How is a Python slice object interpreted when passed as a learning rate to fastai?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">21. Why is early stopping a poor choice when using 1cycle training?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">22. What is the difference between resnet50 and resnet101?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">23. What does to_fp16 do?</p><p></p></div>

## Further Research

<div class="admonition hint"><p class="admonition-title">1. Find the paper by Leslie Smith that introduced the learning rate finder, and read it.</p><p></p></div>
<div class="admonition hint"><p class="admonition-title">2. See if you can improve the accuracy of the classifier in this chapter. What's the best accuracy you can achieve? Look on the forums and the book's website to see what other students have achieved with this dataset, and how they did it.</p><p></p></div>