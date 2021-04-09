---
layout: post
title: Fastbook Lesson 7
tag: Fast.ai
category: posts
order: 7
---
## Questions

<div class="admonition note"><p class="admonition-title">1. What is the difference between ImageNet and Imagenette? When is it better to experiment on one versus the other?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">2. What is normalization?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">3. Why didn't we have to care about normalization when using a pretrained model?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">4. What is progressive resizing?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">5. Implement progressive resizing in your own project. Did it help?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">6. What is test time augmentation? How do you use it in fastai?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">7. Is using TTA at inference slower or faster than regular inference? Why?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">8. What is Mixup? How do you use it in fastai?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">9. Why does Mixup prevent the model from being too confident?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">10. Why does training with Mixup for five epochs end up worse than training without Mixup?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">11. What is the idea behind label smoothing?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">12. What problems in your data can label smoothing help with?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">13. When using label smoothing with five categories, what is the target associated with the index 1?</p><p></p></div>
<div class="admonition note"><p class="admonition-title">14. What is the first step to take when you want to prototype quick experiments on a new dataset?</p><p></p></div>

## Further Research

<div class="admonition hint"><p class="admonition-title">1. Use the fastai documentation to build a function that crops an image to a square in each of the four corners, then implement a TTA method that averages the predictions on a center crop and those four crops. Did it help? Is it better than the TTA method of fastai?</p><p></p></div>
<div class="admonition hint"><p class="admonition-title">2. Find the Mixup paper on arXiv and read it. Pick one or two more recent articles introducing variants of Mixup and read them, then try to implement them on your problem.</p><p></p></div>
<div class="admonition hint"><p class="admonition-title">3. Find the script training Imagenette using Mixup and use it as an example to build a script for a long training on your own project. Execute it and see if it helps.</p><p></p></div>
<div class="admonition hint"><p class="admonition-title">4. Read the sidebar "Label Smoothing, the Paper", look at the relevant section of the original paper and see if you can follow it. Don't be afraid to ask for help!</p><p></p></div>