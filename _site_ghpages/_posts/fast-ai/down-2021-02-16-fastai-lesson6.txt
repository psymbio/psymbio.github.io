---
layout: post
title: Fastbook Lesson 6
tag: Fast.ai
category: posts
order: 6
---
## Questions

<div class="admonition note"><p class="admonition-title">1. How could multi-label classification improve the usability of the bear classifier?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">2. How do we encode the dependent variable in a multi-label classification problem?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">3. How do you access the rows and columns of a DataFrame as if it was a matrix?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">4. How do you get a column by name from a DataFrame?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">5. What is the difference between a Dataset and DataLoader?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">6. What does a Datasets object normally contain?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">7. What does a DataLoaders object normally contain?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">8. What does lambda do in Python?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">9. What are the methods to customize how the independent and dependent variables are created with the data block API?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">10. Why is softmax not an appropriate output activation function when using a one hot encoded target?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">11. Why is nll_loss not an appropriate loss function when using a one-hot-encoded target?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">12. What is the difference between nn.BCELoss and nn.BCEWithLogitsLoss?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">13. Why can't we use regular accuracy in a multi-label problem?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">14. When is it okay to tune a hyperparameter on the validation set?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">15. How is y_range implemented in fastai? (See if you can implement it yourself and test it without peeking!)</p><p></p></div>
<div class="admonition note"><p class="admonition-title">16. What is a regression problem? What loss function should you use for such a problem?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">17. What do you need to do to make sure the fastai library applies the same data augmentation to your input images and your target point coordinates?</p><p></p></div>

## Further Research

<div class="admonition hint"><p class="admonition-title">1.Read a tutorial about Pandas DataFrames and experiment with a few methods that look interesting to you. See the book's website for recommended tutorials.</p><p></p></div>
<div class="admonition hint"><p class="admonition-title">2. Retrain the bear classifier using multi-label classification. See if you can make it work effectively with images that don't contain any bears, including showing that information in the web application. Try an image with two different kinds of bears. Check whether the accuracy on the single-label dataset is impacted using multi-label classification.</p><p></p></div>