---
layout: post
title: Transformers
tag: ML
category: posts
order: 1
pagestyle: base
pagestyle2: post
---

https://www.youtube.com/watch?v=XfpMkf4rD6E&t=199s&ab_channel=StanfordOnline

[Attention is all you need](https://arxiv.org/pdf/1706.03762) - this transformer architecture can be applied to all different tasks - be it images, text, material science, graphs, etc. 

[A Neural Probabilistic Language Model](https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf) using an MLP i.e, can we predict the next words that occur in a sequence. 

[Sequence to Sequence Learning with Neural Networks](https://arxiv.org/abs/1409.3215) how do we translate sentences into different languages. LSTM tries to build up a context what is read word-by-word and . The big problem with this was the encoder bottleneck - so basically the entire sentence that we are trying to translate is packed into a single vector and then goes from encoder to decoder. 

[Neural Machine Translation by Jointly Learning to Align and Translate](https://arxiv.org/abs/1409.0473) fix for the previous paper we can add basically another fixed length vector that allows us to soft-search parts of the source sentence that are relevant to predicting the target sentence. So basically, attention. While you are decoding you are allowed to look back at the encoder via the soft-search mechanism. 