---
layout: post
title: RNNs from Scratch
tag: ML
category: posts
order: 1
pagestyle: base
pagestyle2: post
---

I tried to recreate [Denny Britz's blog on it](https://dennybritz.com/posts/wildml/recurrent-neural-networks-tutorial-part-2/) the code is [here](https://github.com/psymbio/learning_machine_learning/blob/main/rnns_from_scratch/poem_generator.py). This is mostly a copy with some changes to exercise re-writing the code which allows me to understand the code - changes include - 

1. The dataset (yeah, it is interesting to deal with different datasets, I tried dealing with Paul Graham's essays but that leads to a 21,000 vocab_size which is would then lead to some chopping to a 8000 size - but I just didn't want to generate output with a lot of `"<UNK>"` tags).
2. The preprocessing and tokenization technique - we use the more prevalent tiktoken library (because it is reversible and lossless, so you can convert tokens back into the original text and 
it works on arbitrary text, even text that is not in the tokeniser's training data).

His blog does an exceptional job handling everything except when it came to the bptt formulae - he says: For now you can treat BPTT as a black box.

## Back Propagation through Time

I do hope you are half aware of gradient descent - but if not I recommend [the micrograd video](https://www.youtube.com/watch?v=VMj-3S1tku0&ab_channel=AndrejKarpathy) and [this blog post for notes and code of the video](https://psymbio.github.io/posts/micrograd/). It truly is the only way I understood the concepts of back propogation, weight updation and gradient descent.

I tried writing up the formulae for this on my own but the thing is I can't do calculus anymore - yeah. Only because in school I didn't really see the application of it and I was more interested in the prospect of bunking classes. So, basically now at this age I can either go back to like solving a bunch of questions on differentiation or look at this in a more backward fashion. Backward learning: we look at something complicated, not understand it but know it is composed of easier concepts and understand those and build towards the whole (we also don't meander too much).

This basically makes this blog a mess, but chronologically accurate - I am learning things backwards and not forwards.

Go to my writeup on [differentiation here](https://psymbio.github.io/posts/differentiation/).